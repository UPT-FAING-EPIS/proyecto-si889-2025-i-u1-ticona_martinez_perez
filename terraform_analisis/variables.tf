variable "moneda" {
  description = "Moneda de los costos"
  type        = string
  default     = "PEN" # Soles peruanos
}

variable "costos" {
  description = "Costos del proyecto en soles"
  type = map(number)
  default = {
    cpu                   = 950
    placa_base            = 450
    fuente_poder          = 150
    ram                   = 200
    ssd                   = 200
    disco_duro            = 180
    tarjeta_red           = 50
    tarjeta_video         = 900
    ventiladores          = 120
    mouse_teclado         = 100
    monitor               = 550
    parlantes             = 70
    estabilizador         = 180
    gabinete              = 200
    impresora             = 1000

    internet_mensual      = 100
    hosting_mensual       = 30
    oficina_mensual       = 800
    papel_bond_mensual    = 14
    tinta_mensual         = 60
    electricidad_mensual  = 85
    agua_mensual          = 30

    postgresql_mensual    = 110.2
    render_mensual        = 72.2
    vercel_mensual        = 76.0

    jefe_proyecto_mensual = 2500
    programador_mensual   = 1550
    dba_mensual           = 1300
    tester_mensual        = 1200
  }
}

