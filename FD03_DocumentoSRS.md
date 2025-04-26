# Plataforma Avanzada para Generación Automática de Diagramas UML  
**Documento FD03 - Especificación Técnica Detallada**  
*Tech Solutions - Versión 1.0*

---

## 1. Issues en Formato "Como...Quiero...Para..." (User Stories)

### Módulo Autenticación
| **ID** | **Título** | **Descripción** |
|--------|------------|----------------|
| US-01 | Como usuario, quiero autenticarme con email y contraseña para acceder a la plataforma | **Criterios de Aceptación:**<br>- Validar credenciales contra base de datos<br>- Mostrar error si son incorrectas |
| US-02 | Como administrador, quiero gestionar roles de usuarios para controlar permisos | **Criterios de Aceptación:**<br>- Asignar roles (Admin/Usuario/Invitado)<br>- Restringir acceso a funcionalidades |

### Módulo Generación UML
| **ID** | **Título** | **Descripción** |
|--------|------------|----------------|
| US-03 | Como desarrollador, quiero pegar código Java/Python para generar diagramas de clases automáticamente | **Criterios de Aceptación:**<br>- Analizar sintaxis del código<br>- Generar relaciones de herencia/composición |
| US-04 | Como usuario, quiero seleccionar el tipo de diagrama (clases/secuencia) para visualizar diferentes vistas | **Criterios de Aceptación:**<br>- Mostrar opciones de diagramas<br>- Actualizar vista al seleccionar |

---

## 2. Criterios de Aceptación en Gherkin


### Para US-01 (Autenticación)
```gherkin
Feature: Autenticación de Usuario
  Scenario: Login exitoso
    DADO que ingreso mi email "usuario@tech.com" y contraseña "Secure123*"
    CUANDO hago clic en "Iniciar Sesión"
    ENTONCES debo acceder al dashboard principal
    Y ver el mensaje "Bienvenido, usuario@tech.com"

  Scenario: Credenciales inválidas
    DADO que ingreso un email "noexist@tech.com" o contraseña incorrecta
    CUANDO hago clic en "Iniciar Sesión"
    ENTONCES debo ver el error "Credenciales no válidas"

Feature: Generación de Diagrama de Clases
  Scenario: Conversión desde código Python
    DADO que pego el siguiente código:
      """
      class Car:
        def __init__(self, model: str):
          self.model = model
      """
    CUANDO selecciono "Diagrama de Clases"
    ENTONCES debo ver un rectángulo con la clase "Car"
    Y un atributo "model: str"