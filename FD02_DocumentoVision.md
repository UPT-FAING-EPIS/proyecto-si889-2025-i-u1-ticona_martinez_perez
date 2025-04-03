![](media/Aspose.Words.5045698c-97b8-4be9-93a3-546de6bef5d8.001.png)

![C:\Users\EPIS\Documents\upt.png](media/Aspose.Words.5045698c-97b8-4be9-93a3-546de6bef5d8.002.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**


**Plataforma Avanzada para la Generación Automática de Diagramas UML empresa Tech Solutions**

Curso: Patrones de Software

Docente: Mag. Patrick Cuadrados

Integrantes:

\- Alexis Jeanpierre Martínez Vargas			(2019063638)

\- Juan José David Pérez Vizcarra				(2019063636)

\- Jhon Thomas Ticona Chambi				(2018062232)





**Tacna – Perú**

**2025**















**Plataforma Avanzada para la Generación Automática de Diagramas UML empresa Tech Solutions**
**


**Documento de Visión**

**Versión *1.1***

***Presentado Por:***

*Martínez Vargas, Alexis Jeanpierre*

*Documentador*

*2025*



|**CONTROL DE VERSIONES**|||||||
| :-: | :- | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo||
|1\.0|AMV|AMV, JTC|JTC|18/03/2025|Versión Inicial||
|1\.1|AMV|AMV, JTC|JTC|31/03/2025|Versión Modificada||

**Índice General**

[1. Introducción	4](#_toc174269278)

[1.1. Propósito	4](#_toc174269279)

[1.2. Alcance	4](#_toc174269280)

[1.3. Definiciones, Siglas y Abreviaturas	5](#_toc174269281)

[1.4. Visión General	5](#_toc174269282)

[2. Posicionamiento	6](#_toc174269283)

[2.1. Oportunidad de Negocio	6](#_toc174269284)

[2.2. Definición del Problema	7](#_toc174269285)

[3. Descripción de los Interesados	7](#_toc174269286)

[3.1. Resumen de los Interesados	7](#_toc174269287)

[3.2. Resumen de los Usuarios	8](#_toc174269288)

[3.3. Entorno del Usuario	8](#_toc174269289)

[3.4. Perfiles de los Interesados	8](#_toc174269290)

[3.5. Perfiles de los Usuarios	9](#_toc174269291)

[3.6. Necesidades de los interesados y usuarios	9](#_toc174269292)

[4. Vista General del Proyecto	10](#_toc174269293)

[4.1. Perspectiva del Producto	10](#_toc174269294)

[4.2. Resumen de Capacidades	10](#_toc174269295)

[4.3. Suposiciones y Dependencias	11](#_toc174269296)

[4.4. Costos y Precios	11](#_toc174269297)

[4.5. Licenciamiento e Instalación	13](#_toc174269298)

[5. Características del Proyecto	14](#_toc174269299)

[6. Restricciones	15](#_toc174269300)

[7. Rangos de Calidad	16](#_toc174269301)

[8. Precedencia y prioridad	16](#_toc174269302)

[9. Otros requerimientos del Producto	16](#_toc174269303)

[Estándares Legales	16](#_toc174269304)

[Estándares de comunicación	17](#_toc174269305)

[Estándares de cumplimiento de la plataforma	17](#_toc174269306)

[Estándares de calidad y seguridad	17](#_toc174269307)

[CONCLUSIONES	18](#_toc174269308)

[RECOMENDACIONES	18](#_toc174269309)
# <a name="_toc174269278"></a>**1. Introducción**
## <a name="_toc174269279"></a>**1.1. Propósito**
El objetivo de este documento es proporcionar una visión general de la arquitectura de la "Plataforma Avanzada para la Generación Automática de Diagramas UML para la empresa Tech Soluciones", un proyecto desarrollado para facilitar la creación y edición de diagramas UML de manera automatizada y colaborativa.

Esta plataforma está diseñada para permitir la generación de diagramas UML a partir de código fuente en distintos lenguajes de programación (C#, Python, Java, etc.), así como modelos en JSON o YAML. Además, incluye un editor gráfico con validaciones en tiempo real, un modo de colaboración multiusuario y la posibilidad de generar diagramas basados en el historial de cambios en repositorios Git.

Este documento detallará los requerimientos funcionales del sistema, casos de uso, diagramas de secuencia y diagramas de clases, además de describir los mecanismos de validación y conversión de código a UML. La información técnica y funcional del proyecto se documentará en especificaciones complementarias que respalden su diseño y desarrollo.

El sistema será presentado como una propuesta de solución tecnológica para Tech Soluciones, una empresa especializada en el desarrollo de software y consultoría tecnológica. La implementación de esta plataforma permitirá a Tech Soluciones ampliar su portafolio de productos, ofreciendo una herramienta innovadora para el diseño y documentación de software.
## <a name="_toc174269280"></a>**1.2. Alcance**
La "Plataforma Avanzada para la Generación Automática de Diagramas UML para la empresa Tech Soluciones" abarcará el desarrollo de una herramienta web o de escritorio diseñada para facilitar la creación y edición de diagramas UML mediante la automatización y validación en tiempo real.

El sistema contará con las siguientes funcionalidades principales:

- Generación automática de diagramas UML (clases, casos de uso, secuencia, componentes) a partir de código fuente en múltiples lenguajes y modelos JSON/YAML.
- Validación en tiempo real para garantizar la coherencia y corrección de los diagramas generados.
- Edición manual de diagramas UML mediante una interfaz intuitiva y asistida.
- Modo de colaboración en tiempo real que permite a varios usuarios trabajar en un mismo diagrama simultáneamente.
- Integración con repositorios Git para generar diagramas UML a partir del historial de cambios en el código.
- Soporte para plugins, permitiendo la extensibilidad de la plataforma con nuevos lenguajes y reglas de análisis.
- Exportación de diagramas UML en distintos formatos (PDF, PNG, SVG, entre otros).

El sistema está diseñado para ser una herramienta útil para estudiantes, desarrolladores y equipos de proyectos de software que requieren la generación rápida y precisa de diagramas UML. Su arquitectura flexible permitirá su expansibilidad a otras organizaciones que necesiten mejorar la documentación de sus sistemas.

Nuestro equipo desarrollará y optimizará esta solución con la intención de presentarla y comercializarla a Tech Soluciones, ofreciendo una propuesta de valor innovadora y alineada con las necesidades del mercado.
## <a name="_toc174269281"></a>**1.3. Definiciones, Siglas y Abreviaturas**
RUP: Son las siglas de Rational Unified Process. Se trata de una metodología para describir el proceso de desarrollo de software. Esta metodología se enfoca en la calidad del software, la gestión de proyectos, el control de cambios y la integración de todo el proceso de desarrollo de software.

Bootstrap: Es un framework o conjunto de herramientas de diseño web que permite desarrollar páginas web y aplicaciones móviles de forma rápida y eficiente. Bootstrap proporciona una serie de componentes HTML, CSS y JavaScript predefinidos y personalizables para que los desarrolladores puedan crear interfaces de usuario modernas y adaptables para diferentes dispositivos y tamaños de pantalla.

Página Web: Una página web es un documento electrónico que se accede a través de internet y que puede contener texto, imágenes, videos y otros elementos multimedia. Las páginas web se desarrollan mediante lenguajes de marcado como HTML, CSS y JavaScript, y se alojan en servidores web que los usuarios pueden acceder a través de navegadores web como Chrome, Firefox o Safari.
## <a name="_toc174269282"></a>**1.4. Visión General**
El Sistema de Generación Automática de Documentos Técnicos para la empresa Tech Solutions es una plataforma diseñada para optimizar y automatizar la creación de documentos técnicos mediante inteligencia artificial y procesamiento automatizado de datos.

Este sistema permitirá a los usuarios generar documentos estructurados de manera eficiente, reduciendo el tiempo necesario para la redacción de informes y garantizando coherencia y precisión en el contenido. Su interfaz será intuitiva y fácil de usar, permitiendo la personalización de documentos a partir de plantillas predefinidas o configurables.

Principales funcionalidades:

- Generación automática de documentos basada en plantillas personalizables.
- Procesamiento de datos para extraer y estructurar información de manera eficiente.
- Aplicación de inteligencia artificial para mejorar la redacción, ajustando estilo y coherencia según el contexto del documento.
- Exportación en múltiples formatos (PDF, Word, HTML, entre otros).
- Edición en tiempo real, permitiendo modificaciones rápidas y personalización del contenido.
- Gestión y almacenamiento de documentos, con historial de versiones y acceso a reportes previos.

El sistema está dirigido a estudiantes, profesionales y equipos de trabajo que requieren generar informes técnicos de forma rápida y eficiente. Sin embargo, su diseño modular permitirá su expansión a otros sectores que necesiten gestionar documentación técnica de manera automatizada.

Este proyecto será desarrollado con el objetivo de ser comercializado por Tech Solutions Perú, una empresa tecnológica especializada en soluciones de software y consultoría. La implementación de esta herramienta les permitirá ampliar su catálogo de productos y ofrecer un servicio innovador a sus clientes.
# <a name="_toc174269283"></a>**2. Posicionamiento**
## <a name="_toc174269284"></a>**2.1. Oportunidad de Negocio**
<a name="_heading=h.gjdgxs"></a>La creciente demanda de herramientas que optimicen y automaticen la generación de documentos técnicos representa una oportunidad de negocio significativa. Actualmente, muchas organizaciones dependen de procesos manuales para la redacción de informes, lo que consume tiempo, genera inconsistencias y aumenta el riesgo de errores.

Tech Solutions, como empresa especializada en soluciones tecnológicas, busca incorporar herramientas innovadoras que mejoren la productividad y eficiencia de sus clientes. Este sistema permitirá a la empresa ofrecer un servicio diferenciado, brindando una solución que agiliza la redacción de informes, minimiza errores y estandariza la documentación técnica.

**Valor agregado del sistema:**

- **Reducción de tiempos de elaboración:** Automatiza la generación de documentos, reduciendo la dependencia de procesos manuales.
- **Calidad y coherencia en los informes:** Aplica inteligencia artificial para optimizar el contenido y mejorar la estructura del texto.
- **Flexibilidad y personalización:** Permite editar documentos mediante plantillas adaptables según los requerimientos del usuario.
- **Gestión eficiente de documentos:** Proporciona almacenamiento centralizado con trazabilidad y control de versiones.

Con esta herramienta, Tech Solutions podrá fortalecer su oferta de software y atraer nuevos clientes que buscan optimizar su flujo de documentación técnica, consolidándose como un proveedor líder en soluciones de automatización documental.
## <a name="_toc174269285"></a>**2.2. Definición del Problema**
Uno de los principales desafíos que enfrentan empresas, estudiantes y equipos de trabajo es la falta de una herramienta eficiente para la generación automática y estructurada de documentos técnicos. Actualmente, estos documentos se redactan manualmente, lo que conlleva largos tiempos de elaboración, falta de estandarización y errores en la información.

Este problema se intensifica en escenarios donde se requiere una gran cantidad de documentación recurrente, como reportes de avance, análisis de proyectos o documentación de procesos. La ausencia de un sistema automatizado afecta la eficiencia y productividad, generando retrasos en la entrega de documentos y dificultades para mantener formatos uniformes.

Por lo tanto, la solución consiste en desarrollar una plataforma que permita a los usuarios generar documentos técnicos de manera rápida, precisa y estructurada. Esto se logrará mediante el uso de plantillas predefinidas y herramientas de inteligencia artificial que optimicen el contenido. Al abordar este problema, Tech Solutions podrá ofrecer un producto innovador que agilice los procesos documentales de sus clientes y mejore la calidad de la información generada.
# <a name="_toc174269286"></a>**3. Descripción de los Interesados**
## <a name="_toc174269287"></a>**3.1. Resumen de los Interesados**
Gerente de la Empresa Tech Solutions:

Principal autoridad interesada en la implementación del sistema. Su objetivo es ofrecer una herramienta innovadora que optimice la generación de documentos técnicos, mejorando la productividad y eficiencia de sus clientes. El gerente busca que este sistema agregue valor al portafolio de soluciones tecnológicas de la empresa, diferenciándola de la competencia y permitiéndole atraer nuevos clientes que requieren automatización en la documentación técnica.
## <a name="_toc174269288"></a>**3.2. Resumen de los Usuarios**
Usuarios:

- Equipos de trabajo en el sector tecnológico, ingenierías, consultorías y educación, que necesitan reportes recurrentes y detallados. 
- Estudiantes y académicos que buscan una forma eficiente de elaborar informes sin perder tiempo en el formato o estructura del contenido.
## <a name="_toc174269289"></a>**3.3. Entorno del Usuario**
El sistema será accesible a través de navegadores web en ordenadores de escritorio, portátiles, tabletas y teléfonos móviles, siempre que dispongan de conexión a internet.

Los usuarios podrán iniciar sesión con sus credenciales, lo que les permitirá acceder a funcionalidades como:

- Creación y edición de documentos técnicos mediante plantillas adaptables.
- Uso de inteligencia artificial para mejorar la redacción y coherencia de textos.
- Gestión centralizada de documentos para almacenamiento y seguimiento.
- Exportación de documentos en múltiples formatos (PDF, Word, etc.).

El sistema priorizará una interfaz intuitiva, fácil de navegar y responsive, diseñada para que cualquier usuario, sin conocimientos técnicos avanzados, pueda manejarlo sin dificultades. Además, se incluirán opciones de soporte y asistencia dentro de la plataforma para guiar a los usuarios en el uso de las diferentes funcionalidades y resolver dudas de manera rápida y eficiente.
## <a name="_toc174269290"></a>**3.4. Perfiles de los Interesados** 

*Tabla 1. Descripción del Dueño. Breve descripción del gerente de la Empresa Tech Solutions*

|**Representante**|Gerente Ronald Ibarra Zapata|
| - | - |
|**Descripción**|Gerente de la Empresa Tech Solutions|
|**Tipo**|Administración de Empresas|
|**Responsabilidades**|Lleva a cabo un seguimiento del desarrollo del proyecto y aprobación de los requisitos, funcionalidades del sistema.|
|**Criterio de Éxito**|A definir por el cliente|
|**Grado de participación**|Seguimiento del Sistema Web.|
|**Comentarios**|Ninguno|

`				`*Fuente: Elaboración Propia*
## <a name="_toc174269291"></a>**3.5. Perfiles de los Usuarios**
*Tabla 2. Descripción del Usuario*

|**Representante**|Profesional de Ingeniería de Sistemas encargado del área TI|
| - | - |
|**Descripción**|Personales responsables de los equipos tecnológicos|
|**Tipo**|Usuario|
|**Responsabilidades**|Participar en los servicios brindados por la consultoría.|
|**Criterio de Éxito**|A definir por el cliente|
|**Grado de participación**|A definir por el cliente|
|**Comentarios**|Ninguno|

*Fuente: Elaboración Propia*

*Tabla 3. Descripción del Usuario*

|**Representante**|Alumnos o estudiantes que hacen uso del Programa|
| - | - |
|**Descripción**|Persona que busca el servicio de Sistema|
|**Tipo**|Usuario|
|**Responsabilidades**|Participar en los servicios brindados por la consultoría.|
|**Criterio de Éxito**|A definir por el cliente|
|**Grado de participación**|A definir por el cliente|
|**Comentarios**|Ninguno|

`				`*Fuente: Elaboración Propia*
## <a name="_toc174269292"></a>**3.6. Necesidades de los interesados y usuarios**
- **Acceso a una plataforma en línea** fácil de usar y segura, que permita a los clientes de Tech Solutions automatizar la elaboración de documentos técnicos, optimizando el tiempo y reduciendo errores.
- **Sistema centralizado para la gestión de documentos**, con acceso a plantillas predefinidas y personalizables, asegurando una organización eficiente.
- **Alertas y notificaciones en tiempo real** sobre la elaboración de informes, vencimientos de entrega, solicitudes de revisión y modificaciones en documentos compartidos.
- **Herramienta de inteligencia artificial para asistencia en la redacción**, con capacidad para identificar errores, sugerir mejoras y garantizar la coherencia del contenido técnico.
- **Generación automatizada de informes** con opciones de exportación en múltiples formatos (PDF, Word, etc.), cumpliendo con los estándares específicos de cada industria.

# <a name="_toc174269293"></a>**4. Vista General del Proyecto**
## <a name="_toc174269294"></a>**4.1. Perspectiva del Producto**
El producto a desarrollar es una plataforma web innovadora para Tech Solutions, diseñada para optimizar la creación y gestión de informes técnicos mediante inteligencia artificial. Esta herramienta permitirá a los usuarios automatizar la redacción, estructuración y generación de documentos técnicos, reduciendo el esfuerzo manual y mejorando la precisión del contenido.

Principales características del sistema:

- Automatización de informes técnicos basada en plantillas predefinidas y personalizables.
- Gestión centralizada de documentos, con control de versiones y almacenamiento seguro.
- Interfaz intuitiva y fácil de usar, optimizada para cualquier dispositivo.
- Disponibilidad 24/7, accesible desde cualquier navegador web.
- Escalabilidad y adaptabilidad, permitiendo la incorporación de nuevas funcionalidades en el futuro.

El objetivo del sistema es posicionar a Tech Solutions como un referente en automatización documental, proporcionando una solución moderna que agilice los procesos técnicos de sus clientes y mejore su productividad.
## <a name="_toc174269295"></a>**4.2. Resumen de Capacidades**
*Tabla 4. Descripción del beneficio del Cliente. Mostración de las características del beneficio para el cliente.*

|**Beneficio del cliente**|**Características que lo apoyan**|
| :-: | :-: |
|**Mayor eficiencia en la gestión de inventarios**|Herramientas de búsqueda avanzada y filtros personalizados para facilitar la gestión de equipos.|
|**Experiencia de usuario mejorada**|La plataforma contará con una interfaz intuitiva.|
|**Disponibilidad 24/7**|La plataforma estará accesible en cualquier momento y desde cualquier dispositivo con conexión a internet.|
|**Acceso a información detallada**|Descripciones completas de equipos, su estado, historial de daños, y ubicaciones.|
|**IA para consultas específicas**|Integración de inteligencia artificial para permitir consultas rápidas y precisas sobre el inventario.|
|**Automatización de informes técnicos**|Plantillas predefinidas para la rápida elaboración de informes técnicos conformes a los estándares .|

`				`*Fuente: Elaboración Propia*
## <a name="_toc174269296"></a>**4.3. Suposiciones y Dependencias**
**SUPOSICIONES:**

- Se cuenta con la autorización y apoyo de Tech Solutions para la implementación y despliegue de la plataforma en su entorno corporativo. 
- El éxito del sistema dependerá de la adopción y capacitación de los empleados en el uso de la plataforma para la automatización y gestión de informes técnicos. 
- Los usuarios finales tienen acceso a dispositivos con conexión a internet y cumplen con los requisitos mínimos de hardware y software para utilizar la plataforma de manera óptima.

**DEPENDENCIAS:**

- El proyecto depende de la colaboración activa del equipo de Tech Solutions para la integración de los procesos documentales actuales en la nueva plataforma.
- La calidad y precisión de los informes generados dependerán de la correcta configuración de plantillas y del uso adecuado de la inteligencia artificial por parte de los usuarios.
- El sistema no depende de plataformas externas para su funcionalidad principal, pero podría requerir integraciones futuras con otros sistemas de gestión documental utilizados por Tech Solutions.
## <a name="_toc174269297"></a>**4.4. Costos y Precios**
### <a name="_toc164535733"></a>**4.4.1. Costos Generales**	
*Tabla de Materiales de Escritorio* 

<table><tr><th colspan="1" rowspan="2"><b>Materiales de escritorio</b> </th><th colspan="3"><b>Tiempo/Coste</b> </th></tr>
<tr><td colspan="1"><b>Mes 1</b> </td><td colspan="1"><b>Mes 2</b> </td><td colspan="1"><b>Mes 3</b> </td></tr>
<tr><td colspan="1">Papel bond </td><td colspan="1">S/ 14.00 </td><td colspan="1">S/ 14.00 </td><td colspan="1">S/ 14.00 </td></tr>
<tr><td colspan="1">Tinta de impresora </td><td colspan="1">S/ 60.00 </td><td colspan="1">S/ 0.00 </td><td colspan="1">S/ 0.00 </td></tr>
<tr><td colspan="1"><b>Sub Total</b> </td><td colspan="1">S/ 74.00 </td><td colspan="1">S/ 16.00 </td><td colspan="1">S/ 14.00 </td></tr>
<tr><td colspan="3"><b>TOTAL</b></td><td colspan="1">S/ 105.00</td></tr>
</table>

*Fuente: Elaboración propia de la tabla*

*Tabla 5 – Costos de material de escritorio para equipo de trabajo para el proyecto, “Costo general será una total de **S/105.00**”*

### <a name="_toc150164127"></a><a name="_toc164535734"></a>**4.4.2. Costos del ambiente**	
*Tabla de ambiente laboral* 

<table><tr><th colspan="1" rowspan="2"><b>Costos Ambiente</b></th><th colspan="4"><b>Tiempo/Costo</b> </th></tr>
<tr><td colspan="1"><b>Mes 1</b> </td><td colspan="2"><b>Mes 2</b> </td><td colspan="1" valign="top"><b>Mes 3</b> </td></tr>
<tr><td colspan="1">Servicio de Internet </td><td colspan="1">S/ 80.00</td><td colspan="2">S/ 80.00</td><td colspan="1">S/ 80.00</td></tr>
<tr><td colspan="1">Oficina</td><td colspan="1">S/ 800.00</td><td colspan="2">S/ 800.00</td><td colspan="1">S/ 800.00</td></tr>
<tr><td colspan="1">Hosting (Somee)</td><td colspan="1">S/ 50.00</td><td colspan="2">S/ 50.00</td><td colspan="1">S/ 50.00</td></tr>
<tr><td colspan="1"><b>Sub Total</b> </td><td colspan="2">S/ 930.00</td><td colspan="1">S/ 930.00 </td><td colspan="1">S/ 930.00</td></tr>
<tr><td colspan="4"><b>TOTAL</b></td><td colspan="1">S/2.790.00</td></tr>
</table>

*Fuente: Elaboración propia de la tabla*

*Tabla 6 – Costos de ambiente laboral durante el desarrollo para equipo de trabajo para el proyecto, “Costo total del ambiente es de **s/ 2,790.00”***
### <a name="_toc164535735"></a>**4.4.3. Costos de personal**
*Tabla de costos del personal laboral* 

|**Rol**|**Horario (L a V)**|**Mes 1**|**Mes 2**|**Mes 3**|
| :-: | :-: | :-: | :-: | :-: |
|Jefe de proyecto|8:00 -16:00|S/ 2,500.00|S/ 2,500.00|S/ 2,500.00|
|Programador|8:00 -16:00|S/ 1,550.00|S/ 1,550.00|S/ 1,550.00|
|DBA|8:00 -16:00|S/ 1,300.00|S/ 1,300.00|S/ 1,300.00|
|Tester|8:00 -16:00|S/ 1,200.00|S/ 1,200.00|S/ 1,200.00|
|**Sub Total**|S/ 6,570.00|S/ 6,570.00|S/ 6,570.00||
|**TOTAL**|S/19.650.00||||

*Fuente: Elaboración propia de la tabla*

*Tabla 7 –Costos de costos del personal laboral durante el desarrollo para equipo de trabajo para el proyecto "Costo total del ambiente es de **s/ 19,650.00”***
### <a name="_toc164535736"></a>**4.4.4. Costos operativos durante el desarrollo**

*Tabla de servicios operativos*

<table><tr><th colspan="1" rowspan="2"><b>Servicio</b> </th><th colspan="3"><b>Tiempo/Coste</b> </th></tr>
<tr><td colspan="1"><b>Mes 1</b> </td><td colspan="1"><b>Mes 2</b> </td><td colspan="1"><b>Mes 3</b> </td></tr>
<tr><td colspan="1">Servicio Eléctrico </td><td colspan="1">S/ 85.00</td><td colspan="1" valign="top">` `S/ 85.00 </td><td colspan="1" valign="top">` `S/ 85.00 </td></tr>
<tr><td colspan="1">Servicio de Agua </td><td colspan="1" valign="top">` `S/ 30.00 </td><td colspan="1" valign="top">` `S/ 30.00 </td><td colspan="1" valign="top">` `S/ 30.00 </td></tr>
<tr><td colspan="1"><b>Sub Total</b> </td><td colspan="1" valign="top">` `S/ 115.00 </td><td colspan="1" valign="top">` `S/ 115.00 </td><td colspan="1" valign="top">` `S/ 115.00 </td></tr>
<tr><td colspan="3"><b>TOTAL</b></td><td colspan="1" valign="top">S/ 345.00</td></tr>
</table>

*Fuente: Elaboración propia de la tabla*

*Tabla 8 – Costos de operativos durante el desarrollo para equipo de trabajo para el proyecto, “Costo operativos total es de **S/345.00”***

### <a name="_toc164535737"></a>**4.4.5. Costos totales del desarrollo del sistema**	
A continuación, un resumen de todos los costos totales del proyecto final. 

*Tabla resumen de total de costos*

|Costo Total de Costo General|S/ 105.00|
| :- | - |
|Costo Total del Ambiente|S/ 2,790.00|
|Costo Total del Personal|S/ 19,650.00|
|Costo Total de los Operativos|S/ 345.00|
|Costo Final|S/ 22,890.00|

*Fuente: Elaboración propia de la tabla*

*Tabla 9 – Tabla resumen de todos los costos vistos en la tablas, Costo total de costo general, Costo total de Ambiente , Costo total de personal ,Costo total de los servicios operativos, anteriormente “**Costo final s/22.890.00**” por los 3 meses de desarrollo del proyecto*

## <a name="_toc174269298"></a>**4.5. Licenciamiento e Instalación**
El software utilizado para desarrollar la plataforma " Plataforma Avanzada para la Generación Automática de Diagramas UML para la empresa Tech Soluciones" no presenta problemas de licenciamiento, ya que se emplearán tecnologías y herramientas de desarrollo de código abierto, lo que permite un desarrollo ágil y económico. La instalación de la plataforma se realizará en servidores seguros y confiables, con la opción de utilizar servicios en la nube para garantizar la escalabilidad y el mantenimiento a largo plazo.
# <a name="_toc174269299"></a>**5. Características del Proyecto**
Este sistema automatizará y optimizará los procesos de gestión y elaboración de documentos técnicos en la empresa Tech Solutions, mejorando la eficiencia operativa y la toma de decisiones informadas.

**a) Usabilidad**

La plataforma contará con un diseño amigable e intuitivo que facilitará la navegación para los usuarios, minimizando la posibilidad de errores. Se prestará especial atención a la jerarquía y organización de los elementos en pantalla, asegurando una experiencia de usuario fluida y satisfactoria.

**b) Consistencia**

El sistema garantizará que toda la información disponible esté siempre actualizada. Cualquier modificación o adición de datos será reflejada en tiempo real, asegurando que los usuarios siempre accedan a la información más reciente sobre los documentos técnicos.

**c) Disponibilidad**

La plataforma estará disponible para los usuarios las 24 horas del día, los 7 días de la semana, excepto durante períodos de mantenimiento programado. Esto garantizará que los usuarios puedan gestionar el inventario y elaborar informes en cualquier momento.

**d) Seguridad e integridad de los datos**

El sistema contará con mecanismos robustos de seguridad que registrarán todas las operaciones realizadas, incluyendo la fecha y hora. El acceso estará restringido a usuarios autorizados, quienes deberán autenticarse mediante un numero de documento de usuario o y contraseña.

**e) Mantenibilidad**

El sistema estará diseñado para facilitar la corrección de errores y será adaptable a futuros cambios y actualizaciones. Esto garantizará que la plataforma pueda evolucionar según las necesidades de las tendencias tecnológicas.

**f) Inmediatez en la respuesta**

Las consultas realizadas en el sistema, ya sea sobre la elaboración de documentos técnicos, deberán ser procesadas de manera rápida y precisa para ofrecer una experiencia de usuario eficiente.
# <a name="_toc174269300"></a>**6. Restricciones**

- **Alcance:** El sistema será funcional para dispositivos de cómputo que utilicen versiones recientes de navegadores web, así como para dispositivos móviles con sistemas operativos Android e iOS.
- **Tiempo:** El proyecto será planificado y ejecutado en un período de 3 meses, incluyendo fases de aprobación, planificación, desarrollo, pruebas, implementación y capacitación.
- **Costo:** La inversión total del proyecto se estima en S/. 22,890,00 cubriendo desarrollo, implementación y capacitación.
- **Calidad:** Se espera que el proyecto sea altamente eficiente y que cumpla con todos los requisitos de la empresa Tech Solutions y otros stakeholders.
- **Recursos:** Las características del equipo de cómputo para el desarrollo incluirán servidores con alta disponibilidad, bases de datos optimizadas para el manejo de grandes volúmenes de datos, y tecnologías de frontend y backend modernas.
- **Riesgos, en resumen:**
- Aumento de costos
- Retrasos en el cronograma
- Problemas de planificación
- Subestimación de recursos
- **Satisfacción al cliente:** El sistema está diseñado para cumplir exactamente con las especificaciones solicitadas, garantizando la satisfacción del cliente al proporcionar una herramienta que mejore eficazmente la gestión de inventarios y la elaboración de informes técnicos.
# <a name="_toc174269301"></a>**7. Rangos de Calidad**
- **Funcionalidad:** El sistema optimizará los procesos de elaboración de documentos técnicos, permitiendo una mejor organización y seguimiento de los recursos tecnológicos.
- **Confiabilidad:** El sistema será validado por los usuarios futuros para asegurar su conformidad y fiabilidad.
- **Usabilidad:** La plataforma tendrá una interfaz sencilla y amigable, mostrando las opciones necesarias sin causar confusión.
- **Eficiencia:** Al digitalizar procesos, se reducirá el uso de recursos naturales, como el papel.
- **Capacidad de mantenimiento:** El sistema será escalable, permitiendo la implementación de nuevas funcionalidades y adaptaciones futuras.
# <a name="_toc174269302"></a>**8. Precedencia y prioridad**
- **Precedencia:** El " Plataforma Avanzada para la Generación Automática de Diagramas UML para la empresa Tech Soluciones" se prioriza en el contexto actual de modernización administrativa, facilitando a la empresa Tech Solutions la gestión eficiente de sus recursos tecnológicos y la generación automatizada de informes técnicos.

- **Prioridad:** El principal objetivo es optimizar la gestión de inventarios y la elaboración de documentos técnicos, mejorando la precisión de los datos y proporcionando una herramienta confiable y eficiente para los usuarios encargados de estas tareas.
# <a name="_toc174269303"></a>**9. Otros requerimientos del Producto**
## <a name="_toc174269304"></a>**Estándares Legales**
- El " Sistema de Generación Automática de Documentos Técnicos para la empresa Tech Solutions " deberá cumplir con la Ley de Protección de Datos Personales (Ley N.º 29733) de Perú, garantizando que la base de datos personales esté registrada ante la autoridad nacional de datos personales, según el Decreto Supremo N.º 003-2013-JUS. Esto asegurará que la información personal de los usuarios sea manejada con el máximo nivel de confidencialidad y seguridad.
## <a name="_toc174269305"></a>**Estándares de comunicación**
- La comunicación entre el equipo de desarrollo y las partes interesadas, como la Empresa Tech Solutions, se realizará de manera constante y efectiva, a través de reuniones periódicas, tanto presenciales como virtuales. Esto permitirá resolver cualquier duda o discrepancia respecto al desarrollo del sistema y garantizar que el proyecto avance conforme a los requerimientos establecidos.
## <a name="_toc174269306"></a>**Estándares de cumplimiento de la plataforma**
*Tabla 10. Tabla de Estándares de cumplimiento de plataforma.* 

|**USABILIDAD** |El sitio será fácil de navegar, tendrá un diseño decente, será coherente en todos los módulos, con la información y útil para el visitante. |
| - | - |
|**RENDIMIENTO** |<p>El tiempo de respuesta del sistema para iniciar sesión no debe ser mayor a 7 segundo. </p><p>Los procesos de búsqueda, registro, selección de producto, no deben ser mayor a 5 segundos. </p>|
|**DISPONIBILIDAD** |El sistema contará con una disponibilidad igual a 0.99999 (o 99.999%). |

*Fuente: Elaboración Propia*
## <a name="_toc174269307"></a>**Estándares de calidad y seguridad**

*Tabla 11. Tabla de Estándares de calidad y seguridad. Breves descripciones de los estándares acerca de la calidad y seguridad* 

|**INTEGRIDAD**|El sistema reduce al mínimo la posibilidad de duplicidad de datos, por las validaciones con las que cuenta. |
| :-: | - |
|**CONFIDENCIALIDAD**|La información solo será accesible de forma única a las personas que se encuentran autorizadas . Es necesario acceder a la información mediante un usuario y contraseña único.  |
|**SEGURIDAD**|Para ingresar al sistema el miembro de “Tech Solutions”deberá iniciar sesión y estos datos deben ser validados. |

*Fuente: Elaboración Propia*
# <a name="_toc174269308"></a>**CONCLUSIONES**
- La "Plataforma de Generación Automática de Documentos Técnicos para Tech Solutions" representa una solución innovadora para la optimización de la creación y gestión de documentos técnicos. Su implementación permitirá reducir el tiempo de elaboración manual, mejorar la coherencia del contenido y garantizar la precisión de los informes.
- El desarrollo de esta plataforma requiere un enfoque estructurado, aplicando metodologías ágiles o basadas en RUP, con una planificación detallada para cumplir con los objetivos del proyecto y satisfacer las necesidades de los usuarios.
- La integración de inteligencia artificial en el sistema proporcionará una ventaja competitiva, permitiendo mejorar la redacción de documentos, identificar errores y sugerir optimizaciones en el contenido técnico.
- La adopción de esta herramienta por parte de Tech Solutions fortalecerá su posicionamiento en el mercado, ampliando su catálogo de soluciones tecnológicas y ofreciendo un servicio innovador a sus clientes.
- La escalabilidad de la plataforma permitirá futuras mejoras y expansiones, asegurando su adaptación a distintos sectores que requieran generación automatizada de documentación técnica.
# <a name="_toc174269309"></a>**RECOMENDACIONES**
- Realizar un análisis exhaustivo de los requerimientos de los usuarios e interesados, asegurando que la plataforma cumpla con sus necesidades y optimice sus procesos de documentación técnica.
- Implementar pruebas de calidad rigurosas en todas las fases del desarrollo para garantizar el correcto funcionamiento del sistema, asegurando su rendimiento, seguridad y usabilidad.
- Desarrollar una estrategia de capacitación para los usuarios, facilitando la adopción de la herramienta y maximizando su impacto en la productividad.
- Establecer un equipo de soporte técnico para atender consultas y resolver problemas de manera rápida y eficiente, asegurando la continuidad del servicio y la satisfacción del usuario.
- Evaluar la posibilidad de integrar nuevas funcionalidades en el futuro, como compatibilidad con más formatos de exportación o asistentes avanzados de IA para mejorar la redacción técnica.

<a name="_heading=h.4k668n3"></a>2

