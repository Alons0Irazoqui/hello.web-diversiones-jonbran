# Diversiones Jonbran — Brief de Proyecto Web

Informe de referencia para el desarrollo del sitio web de **Diversiones Jonbran**. Este documento resume la información del negocio, el branding y los requisitos visuales que debe cumplir el proyecto.

---

## 1. Contexto del proyecto

- **Tipo de proyecto:** Landing page.
- El desarrollo se realizará sobre una **plantilla base de HTML ya existente**.
- Ya se entregó por separado un **prompt inicial** para adaptar dicha plantilla al negocio.
- Este documento **no define la estructura de secciones** de la página: la estructura a seguir es la de la plantilla base ya entregada.

---

## 2. Información del negocio

- **Nombre:** Diversiones Jonbran
- **Rubro:** Venta de máquinas de videojuegos y entretenimiento electromecánico.
- **Trayectoria:** En el mercado desde el año 2004 hasta la actualidad.
- **Productos y servicios:**
  - Máquinas de videojuegos y tableros (línea principal del negocio)
  - Máquinas y simuladores importados
  - Simuladores
  - Futbolitos
  - Montables
  - Mesas de billar
  - Brincolines
- **Contacto:** WhatsApp 33 1183 3586
- Dirección y redes sociales: no aplican para este proyecto (no fueron proporcionadas por el cliente, se omiten).

---

## 3. Identidad de marca (branding)

> **Nota:** no se encontró un archivo de logotipo dentro de la carpeta `imagenes/`; esta carpeta solo contiene fotografías de producto. Por lo tanto, la siguiente paleta e identidad visual fueron definidas **a partir de los colores dominantes en las fotografías de las máquinas** (principalmente los gabinetes tipo "Video Rockola", insignia visual del negocio). Cuando se disponga del logo oficial, esta paleta debe validarse/ajustarse contra él.

### Paleta de colores

| Uso | Color | HEX |
|---|---|---|
| Fondo base (premium oscuro) | Negro profundo | `#0A0A0F` |
| Superficie / secciones alternas | Gris carbón | `#16181D` |
| Acento principal (identidad de marca) | Naranja arcade | `#F2811D` |
| Acento secundario | Ámbar / dorado neón | `#FFC94A` |
| Acento terciario (uso puntual, CTAs/detalles) | Azul eléctrico | `#2EC4F1` |
| Texto principal sobre fondo oscuro | Blanco hueso | `#F5F5F7` |
| Texto secundario / muted | Gris neutro | `#9AA0AA` |

El naranja y el ámbar están tomados directamente del color del gabinete y del brillo LED de las máquinas "Video Rockola". El azul eléctrico se usa como acento minoritario, inspirado en las pantallas e iluminación de los gabinetes arcade.

### Tipografía sugerida

- **Encabezados / Display:** Sora (alternativa: Space Grotesk) — geométrica, moderna, con carácter tech.
- **Cuerpo de texto:** Inter — alta legibilidad, estándar en sitios premium/corporativos.

### Identidad visual

Estética oscura tipo "gaming premium": fondos oscuros que hacen resaltar la fotografía de producto iluminada (neones, pantallas, luces LED de las máquinas), con acentos cálidos (naranja/ámbar) como color de marca y toques de azul eléctrico como contraste. El resultado debe evocar tecnología y entretenimiento de alta gama, no un estilo "arcade retro" genérico.

---

## 4. Estilo visual obligatorio

El proyecto debe manejar:

- Estilo **premium, enterprise y corporativo de marca**.
- Nivel **big tech**: elegante y a la vez minimalista.

---

## 5. Efectos y animaciones requeridos

El proyecto debe incluir:

- Efectos visuales y **animaciones de scroll**.
- **Pantalla de carga (preloader)** con spinner + logo del negocio.
- Animaciones en el **título del hero**: efecto máquina de escribir, cambio de color en las letras u otros efectos tipográficos similares.

---

## 6. Instrucciones sobre assets

- **Logo:** actualmente **no está** en la carpeta `imagenes/`. Cuando se obtenga/reciba, viene o vendrá **con fondo**, por lo que es obligatorio **removerle el fondo** antes de usarlo en el sitio (preloader, favicon, header, etc.).
- **Fotografías de producto utilizables** (gabinetes arcade / "Video Rockola"), disponibles en `imagenes/`:
  - `123.jpeg`, `456.jpeg`, `dfgh.jpeg` — gabinete "Video Rockola" (naranja, con luz LED ámbar).
  - `345.jpeg`, `bm.jpeg` — gabinetes arcade multijuego (FIFA/WWE, línea roja y verde).
  - `567.jpeg` — gabinetes "King of Fighters" / GTA en exhibición.
  - `nbm.jpeg` — gabinete Street Fighter II / Capcom.
  - `sdf.jpeg` — pantalla de menú de selección de juegos.
  - `vbn.jpeg` — gabinete Mortal Kombat 11.
- **Archivos no utilizables como imagen de marca/producto:** `WhatsApp Image 2026-07-21 at 9.29.23 PM.jpeg` y `dszf.jpeg` corresponden a componentes internos de PC (placa madre, disco duro, fuente de poder); no son aptos para mostrarse en el sitio.
- **Video disponible:** `WhatsApp Video 2026-07-21 at 9.29.23 PM.mp4`. Evaluar su uso (orientación, duración, peso) y comprimir/recortar si se integra al sitio.
- Todas las fotografías deben revisarse y optimizarse (compresión, recorte, formato web) antes de subirlas al sitio, ya que son fotos de producto tomadas en condiciones variables de luz y encuadre.

---

## 7. Nota para el desarrollador

Puedes iterar sobre el proyecto con Claude Code dándole instrucciones las veces que sea necesario, hasta lograr el resultado deseado.

---

## Checklist

- [ ] Conseguir el archivo de logo oficial del negocio.
- [ ] Remover el fondo del logo antes de integrarlo al sitio.
- [ ] Aplicar la paleta de colores (HEX) definida en este documento.
- [ ] Aplicar la tipografía sugerida (encabezados y cuerpo).
- [ ] Construir el sitio sobre la plantilla base existente, respetando su estructura de secciones.
- [ ] Implementar estilo visual premium / enterprise / big tech, minimalista.
- [ ] Implementar animaciones y efectos de scroll.
- [ ] Implementar pantalla de carga (preloader) con spinner + logo.
- [ ] Implementar animación del título del hero (máquina de escribir, cambio de color u otro efecto tipográfico).
- [ ] Revisar, optimizar y organizar las fotografías de producto utilizables listadas en este documento.
- [ ] Evaluar e integrar (o descartar) el video disponible.
- [ ] Incluir el número de WhatsApp (33 1183 3586) como medio de contacto.
- [ ] Iterar con Claude Code hasta alcanzar el resultado final deseado.
