PÁGINA "NUESTRA CITA" — GUÍA RÁPIDA

ARCHIVOS
- index.html: la página que verá tu novia.
- apps-script.gs: código para guardar sus elecciones en Google Sheets.

1) CONFIGURAR EL REGISTRO DE RESPUESTAS
----------------------------------------
1. Entra a Google Sheets y crea una hoja nueva.
2. En esa hoja: Extensiones > Apps Script.
3. Borra el código de ejemplo y pega el contenido de apps-script.gs.
4. Guarda el proyecto.
5. Pulsa Implementar > Nueva implementación.
6. Tipo: Aplicación web.
7. Ejecutar como: tu cuenta.
8. Quién tiene acceso: Cualquiera.
9. Implementa y autoriza.
10. Copia la URL final, que normalmente termina en /exec.

2) CONECTAR LA PÁGINA
---------------------
Abre index.html con un editor de texto y busca:

appsScriptUrl: "PEGA_AQUI_TU_URL_DE_GOOGLE_APPS_SCRIPT"

Reemplázalo por tu URL /exec. Ejemplo:

appsScriptUrl: "https://script.google.com/macros/s/XXXXXXXX/exec"

Guarda el archivo.

3) PERSONALIZAR
---------------
En index.html puedes cambiar:

titulo: "¿Diseñamos nuestra cita? 💕"
intro: "Quiero preparar una cena linda contigo..."

También puedes modificar o quitar preguntas directamente en el arreglo:
const questions = [...]

4) PROBAR
---------
Abre index.html en Chrome.
Responde el formulario y pulsa "Enviar mis elecciones".
Luego revisa tu Google Sheet: se creará una pestaña llamada "Respuestas".

5) COMPARTIR UN LINK
--------------------
Opción sencilla: GitHub Pages.

A) Crea un repositorio nuevo en GitHub.
B) Sube index.html.
C) En el repositorio entra a Settings > Pages.
D) En "Build and deployment", selecciona:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
E) Guarda.
F) GitHub te mostrará una URL pública.

También puedes usar Netlify o Cloudflare Pages.

IMPORTANTE
----------
- NO subas apps-script.gs obligatoriamente al sitio; solo necesitas index.html.
- La URL de Apps Script puede quedar dentro del HTML: permite escribir respuestas,
  pero no da acceso de lectura a tu Google Sheet.
- Si cambias el código de Apps Script después de publicar, crea una nueva versión
  de la implementación o actualiza la implementación existente.
