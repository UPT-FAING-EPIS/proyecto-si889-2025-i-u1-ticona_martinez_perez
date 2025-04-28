# app/utils/uml_generator.py
import re
from typing import Optional

def convert_csharp_to_plantuml(source_code: str) -> str:
    """
    Convierte código C# a PlantUML para diagramas de clase con soporte completo para:
    - Namespaces
    - Clases con herencia
    - Interfaces
    - Propiedades (get/set, readonly)
    - Métodos (incluyendo async)
    - Constructores
    - Atributos ([Serializable] etc.)
    - Relaciones básicas
    """
    plantuml = ["@startuml"]
    source_code = source_code.replace('\r\n', '\n')  # Normalizar saltos de línea

    # Extraer namespace si existe
    namespace_match = re.search(r'namespace\s+([^\s{]+)', source_code)
    if namespace_match:
        plantuml.append(f"namespace {namespace_match.group(1).strip()} {{")

    # Procesar interfaces primero
    interface_matches = re.finditer(
        r'public\s+interface\s+(\w+)\s*\{([^}]+)\}',
        source_code,
        re.DOTALL
    )
    
    for interface in interface_matches:
        interface_name = interface.group(1)
        plantuml.append(f"interface {interface_name} {{")
        
        # Métodos de interfaz
        methods = re.finditer(
            r'(\w+)\s+(\w+)\(([^)]*)\)\s*;',
            interface.group(2)
        )
        for method in methods:
            return_type = method.group(1)
            method_name = method.group(2)
            params = method.group(3).strip()
            plantuml.append(f"  + {method_name}({params}) : {return_type}")
        
        plantuml.append("}")

    # Extraer clases
    class_matches = re.finditer(
        r'(?:\[[^\]]+\]\s*)?public\s+(?:abstract\s+|sealed\s+)?class\s+(\w+)\s*(?::\s*([^{]+))?\s*\{([^}]+)\}',
        source_code,
        re.DOTALL
    )
    
    for class_match in class_matches:
        class_name = class_match.group(1)
        parent_info = class_match.group(2).strip() if class_match.group(2) else None
        class_body = class_match.group(3)
        
        # Procesar atributos de clase
        class_attrs = re.search(r'\[([^\]]+)\]', class_match.group(0))
        if class_attrs:
            plantuml.append(f"note top of {class_name}\n{class_attrs.group(1)}\nend note")
        
        plantuml.append(f"class {class_name} {{")
        
        # Constantes
        constants = re.finditer(
            r'public\s+const\s+(\w+)\s+(\w+)\s*=\s*([^;]+);',
            class_body
        )
        for const in constants:
            plantuml.append(f"  + {const.group(2)} : {const.group(1)} = {const.group(3)}")
        
        # Propiedades
        properties = re.finditer(
            r'public\s+(\w+)\s+(\w+)\s*\{\s*([^}]+)\}',
            class_body
        )
        for prop in properties:
            prop_type = prop.group(1)
            prop_name = prop.group(2)
            accessors = prop.group(3)
            
            if 'private set' in accessors:
                plantuml.append(f"  - {prop_name} : {prop_type} (readonly)")
            elif 'get;' in accessors and 'set;' in accessors:
                plantuml.append(f"  - {prop_name} : {prop_type}")
            elif 'get;' in accessors:
                plantuml.append(f"  + {prop_name} : {prop_type} (get)")
        
        # Campos
        fields = re.finditer(
            r'public\s+(\w+)\s+(\w+)\s*;',
            class_body
        )
        for field in fields:
            plantuml.append(f"  - {field.group(2)} : {field.group(1)}")
        
        # Constructores
        ctors = re.finditer(
            r'public\s+(\w+)\(([^)]*)\)\s*(?::\s*([^{]+))?\s*\{[^}]*\}',
            class_body
        )
        for ctor in ctors:
            params = ctor.group(2).strip()
            base_call = f" : {ctor.group(3)}" if ctor.group(3) else ""
            plantuml.append(f"  + {ctor.group(1)}({params}){base_call}")
        
        # Métodos (incluyendo async)
        methods = re.finditer(
            r'public\s+(async\s+)?(\w+)\s+(\w+)\(([^)]*)\)\s*\{[^}]*\}',
            class_body
        )
        for method in methods:
            is_async = "async " if method.group(1) else ""
            return_type = method.group(2)
            method_name = method.group(3)
            params = method.group(4).strip()
            plantuml.append(f"  + {is_async}{method_name}({params}) : {return_type}")
        
        plantuml.append("}")
        
        # Herencia e implementaciones
        if parent_info:
            # Separar implementación de interfaces de herencia de clase
            parents = [p.strip() for p in parent_info.split(',')]
            for parent in parents:
                if parent.startswith('I'):  # Convención para interfaces
                    plantuml.append(f"{class_name} ..|> {parent}")
                else:
                    plantuml.append(f"{class_name} --|> {parent}")
    
    if namespace_match:
        plantuml.append("}")
    
    plantuml.append("@enduml")
    return "\n".join(plantuml)

def convert_code_to_plantuml(source_code: str, language: str, diagram_type: str) -> str:
    """
    Convierte código fuente a PlantUML según el lenguaje y tipo de diagrama.
    Soporta:
    - C#: class, sequence (básico)
    - Python: class
    - Java: class (básico)
    """
    if not source_code:
        return ""
    
    source_code = source_code.strip()
    
    if language == "csharp":
        if diagram_type == "class":
            return convert_csharp_to_plantuml(source_code)
        elif diagram_type == "sequence":
            return generate_csharp_sequence_diagram(source_code)
    
    elif language == "python" and diagram_type == "class":
        return convert_python_to_plantuml(source_code)
    
    elif language == "java" and diagram_type == "class":
        return convert_java_to_plantuml(source_code)
    
    # Fallback genérico
    return f"""@startuml\nnote right\nDiagrama tipo: {diagram_type} no soportado para {language}\n@enduml"""

# Funciones adicionales para otros lenguajes (ejemplo para Python)
def convert_python_to_plantuml(source_code: str) -> str:
    """Conversor básico para Python a PlantUML"""
    plantuml = ["@startuml"]
    
    # Detectar clases
    class_matches = re.finditer(
        r'class\s+(\w+)\(?([^):]*)?\)?:\s*(?:"""([^"]*)""")?\s*([^"]*)',
        source_code,
        re.DOTALL
    )
    
    for match in class_matches:
        class_name = match.group(1)
        parent_class = match.group(2).strip() if match.group(2) else None
        docstring = match.group(3)
        class_body = match.group(4)
        
        plantuml.append(f"class {class_name} {{")
        
        if docstring:
            plantuml.append(f"  note top\n{docstring}\n  end note")
        
        # Atributos
        attrs = re.finditer(
            r'self\.(\w+)\s*=\s*([^\n]+)',
            class_body
        )
        for attr in attrs:
            plantuml.append(f"  - {attr.group(1)}")
        
        # Métodos
        methods = re.finditer(
            r'def\s+(\w+)\(self(?:,\s*([^)]*))?\):',
            class_body
        )
        for method in methods:
            params = method.group(2) if method.group(2) else ""
            plantuml.append(f"  + {method.group(1)}({params})")
        
        plantuml.append("}")
        
        if parent_class:
            plantuml.append(f"{class_name} --|> {parent_class}")
    
    plantuml.append("@enduml")
    return "\n".join(plantuml)

def generate_csharp_sequence_diagram(source_code: str) -> str:
    """Generador básico de diagramas de secuencia para C#"""
    plantuml = ["@startuml"]
    
    # Detectar llamadas a métodos
    calls = re.finditer(
        r'(\w+)\.(\w+)\(([^)]*)\);',
        source_code
    )
    
    participants = set()
    for call in calls:
        caller = "Client"  # Por defecto
        callee = call.group(1)
        method = call.group(2)
        params = call.group(3)
        
        participants.add(callee)
        
        plantuml.append(f"{caller} -> {callee}: {method}({params})")
        plantuml.append(f"{callee} --> {caller}: return")
    
    # Añadir participantes
    if participants:
        plantuml.insert(1, "\n".join([f"participant {p}" for p in participants]))
    
    plantuml.append("@enduml")
    return "\n".join(plantuml)

def convert_java_to_plantuml(source_code: str) -> str:
    """Conversor básico para Java a PlantUML"""
    # Implementación similar a C# con ajustes para sintaxis Java
    return convert_csharp_to_plantuml(source_code)  # Puede usarse como base