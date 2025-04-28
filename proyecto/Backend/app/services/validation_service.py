# app/services/validation_service.py
from typing import Tuple


def validate_source_code(language: str, source_code: str) -> Tuple[bool, str]:
    """
    Simula la validación básica por lenguaje. Retorna si es válido y el mensaje de error (si hay).
    En un sistema real podrías integrar linters, analizadores estáticos o parseadores como tree-sitter, pylint, etc.
    """
    if not source_code.strip():
        return False, "El código fuente está vacío."

    if language == "python":
        try:
            compile(source_code, "<string>", "exec")
            return True, "OK"
        except SyntaxError as e:
            return False, f"Error de sintaxis en Python: {e}"

    # Validación básica para otros lenguajes (mock)
    if language in ["java", "csharp", "php"]:
        if "class" not in source_code:
            return False, f"No se encontró ninguna clase en el código {language.upper()}"
        return True, "OK"

    return False, "Lenguaje no soportado para validación."
