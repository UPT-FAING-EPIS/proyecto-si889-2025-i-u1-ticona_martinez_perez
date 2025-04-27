locals {
  meses_proyecto = 3
  pcs_requeridas = 3

  # Totales
  costo_total_pc = (
    var.costos["cpu"] +
    var.costos["placa_base"] +
    var.costos["fuente_poder"] +
    var.costos["ram"] +
    var.costos["ssd"] +
    var.costos["disco_duro"] +
    var.costos["tarjeta_red"] +
    var.costos["tarjeta_video"] +
    var.costos["ventiladores"] +
    var.costos["mouse_teclado"] +
    var.costos["monitor"] +
    var.costos["parlantes"] +
    var.costos["estabilizador"] +
    var.costos["gabinete"]
  )

  costo_total_3pcs = local.costo_total_pc * local.pcs_requeridas

  costo_total_servicios = (
    var.costos["internet_mensual"] +
    var.costos["hosting_mensual"] +
    var.costos["oficina_mensual"] +
    var.costos["papel_bond_mensual"] +
    var.costos["tinta_mensual"] +
    var.costos["electricidad_mensual"] +
    var.costos["agua_mensual"]
  ) * local.meses_proyecto

  costo_total_software = (
    var.costos["postgresql_mensual"] +
    var.costos["render_mensual"] +
    var.costos["vercel_mensual"]
  ) * local.meses_proyecto

  costo_total_personal = (
    var.costos["jefe_proyecto_mensual"] +
    var.costos["programador_mensual"] +
    var.costos["dba_mensual"] +
    var.costos["tester_mensual"]
  ) * local.meses_proyecto

  costo_total_proyecto = (
    local.costo_total_3pcs +
    var.costos["impresora"] +
    local.costo_total_servicios +
    local.costo_total_software +
    local.costo_total_personal
  )
}

resource "local_file" "analisis_economico" {
  content  = <<EOT
Analisis Economico del Proyecto

Costos de Equipamiento (por PC):
- CPU Intel Core i7: ${var.costos["cpu"]} ${var.moneda}
- Placa Base ASUS: ${var.costos["placa_base"]} ${var.moneda}
- Fuente de Poder: ${var.costos["fuente_poder"]} ${var.moneda}
- Memoria RAM 16 GB: ${var.costos["ram"]} ${var.moneda}
- SSD 200 GB: ${var.costos["ssd"]} ${var.moneda}
- Disco Duro 500 GB: ${var.costos["disco_duro"]} ${var.moneda}
- Tarjeta de Red: ${var.costos["tarjeta_red"]} ${var.moneda}
- Tarjeta Grafica GTX 1650: ${var.costos["tarjeta_video"]} ${var.moneda}
- Ventiladores: ${var.costos["ventiladores"]} ${var.moneda}
- Mouse y Teclado: ${var.costos["mouse_teclado"]} ${var.moneda}
- Monitor ASUS 24": ${var.costos["monitor"]} ${var.moneda}
- Parlantes: ${var.costos["parlantes"]} ${var.moneda}
- Estabilizador Forza: ${var.costos["estabilizador"]} ${var.moneda}
- Gabinete: ${var.costos["gabinete"]} ${var.moneda}

Costo total por una PC: ${local.costo_total_pc} ${var.moneda}
Costo total de ${local.pcs_requeridas} PCs: ${local.costo_total_3pcs} ${var.moneda}

Otros Equipos:
- Impresora Multifuncional DCP-T510W: ${var.costos["impresora"]} ${var.moneda}

Servicios por ${local.meses_proyecto} meses:
- Internet: ${var.costos["internet_mensual"] * local.meses_proyecto} ${var.moneda}
- Hosting: ${var.costos["hosting_mensual"] * local.meses_proyecto} ${var.moneda}
- Oficina: ${var.costos["oficina_mensual"] * local.meses_proyecto} ${var.moneda}
- Papel Bond: ${var.costos["papel_bond_mensual"] * local.meses_proyecto} ${var.moneda}
- Tinta Impresora: ${var.costos["tinta_mensual"] * local.meses_proyecto} ${var.moneda}
- Electricidad: ${var.costos["electricidad_mensual"] * local.meses_proyecto} ${var.moneda}
- Agua: ${var.costos["agua_mensual"] * local.meses_proyecto} ${var.moneda}
Total Servicios: ${local.costo_total_servicios} ${var.moneda}

Software de Pago por ${local.meses_proyecto} meses:
- PostgreSQL (Base de Datos): ${format("%.2f", var.costos["postgresql_mensual"] * local.meses_proyecto)} ${var.moneda}
- Render.com (Frontend Hosting): ${format("%.2f", var.costos["render_mensual"] * local.meses_proyecto)} ${var.moneda}
- Vercel (Backend Hosting): ${format("%.2f", var.costos["vercel_mensual"] * local.meses_proyecto)} ${var.moneda}
Total Software: ${format("%.2f", local.costo_total_software)} ${var.moneda}

Costos de Personal por ${local.meses_proyecto} meses:
- Jefe de Proyecto: ${var.costos["jefe_proyecto_mensual"] * local.meses_proyecto} ${var.moneda}
- Programador: ${var.costos["programador_mensual"] * local.meses_proyecto} ${var.moneda}
- DBA: ${var.costos["dba_mensual"] * local.meses_proyecto} ${var.moneda}
- Tester: ${var.costos["tester_mensual"] * local.meses_proyecto} ${var.moneda}
Total Personal: ${local.costo_total_personal} ${var.moneda}

-------------------------------------------------------------------------------------------------
COSTO TOTAL DEL PROYECTO: ${local.costo_total_proyecto} ${var.moneda}
-------------------------------------------------------------------------------------------------

Notas:
- Software Libre utilizado: Python, GitHub/GitBash, Teams (sin costo)

EOT

filename = "${path.module}/analisis_economico.txt"

}
