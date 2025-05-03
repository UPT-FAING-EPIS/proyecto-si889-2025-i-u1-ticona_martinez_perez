# Plataforma Avanzada para la Generación Automática de Diagramas UML

**Empresa:** Tech Solutions
**Curso:** Patrones de Software
**Docente:** Mag. Patrick Cuadros

## 📌 Integrantes:

* **Alexis Jeanpierre Martínez Vargas** (2019063638)
* **Juan José David Pérez Vizcarra** (2019063636)
* **Jhon Thomas Ticona Chambi** (2018062232)

---

## 📖 Descripción del Proyecto

La **Plataforma Avanzada para la Generación Automática de Diagramas UML** es una herramienta web creada para facilitar la creación y edición de diagramas UML mediante automatización, validación en tiempo real y colaboración multiusuario.

Permite generar diagramas UML (clases, casos de uso, secuencia, componentes) desde código fuente y modelos JSON/YAML, asegurando precisión y eficiencia en la documentación.

## 🎯 Objetivo

Ofrecer una solución eficiente para la generación y edición colaborativa de diagramas UML, reduciendo la carga manual y mejorando la coherencia de los modelos.

## 📌 Alcance del Proyecto

Sistema web construido con **FastAPI** (backend) y **React** (frontend), incluyendo:

* 🚀 **Generación automática de diagramas UML** desde código fuente y modelos JSON/YAML.
* ✅ **Validación en tiempo real** de la consistencia de los diagramas.
* 🎨 **Edición manual asistida** con herramientas visuales.
* 🔄 **Colaboración multiusuario en tiempo real.**

## 🛠️ Tecnologías Utilizadas

* **FastAPI** (Backend)
* **React** (Frontend)

## 🚀 Instalación y Configuración

### 🔹 Requisitos Previos

* Python 3.9+
* Node.js 16+

### 🔹 Instalación del Backend (FastAPI)

```bash
# Clonar el repositorio
git clone https://github.com/usuario/repositorio.git
cd repositorio/Backend

# Crear entorno virtual e instalar dependencias
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt

# Ejecutar servidor de desarrollo
uvicorn app.main:app --reload
```

### 🔹 Instalación del Frontend (React)

```bash
cd ../Frontend
npm install
npm start
```

## 👥 Estructura del Proyecto

```
C:.
├───Backend
│   └───app
│       ├───api
│       ├───core
│       ├───db
│       ├───models
│       ├───schemas
│       ├───services
│       └───utils
└───Frontend
    └───src
        ├───components
        │   ├───Auth
        │   ├───Dashboard
        │   ├───Layout
        │   └───ui
        ├───context
        └───views
```

## 📈 Resultados de Pruebas de Seguridad y Calidad

### ✅ SonarQube

* Análisis estático completo sobre el backend con reporte de vulnerabilidades y code smells.
* 0 errores críticos detectados.

### 🚀 Snyk

* Evaluación de dependencias en tiempo real para detectar paquetes vulnerables.
* Todas las dependencias del backend y frontend sin vulnerabilidades conocidas.

### 📄 Semgrep

* Reglas aplicadas para identificar patrones de código inseguros.
* Se corrigieron issues menores en servicios del backend.

## 👤 Contribución

Para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama: `git checkout -b feature-nueva`.
3. Sube tus cambios: `git commit -m 'Agregado X'` y `git push origin feature-nueva`.
4. Abre un **pull request**.

