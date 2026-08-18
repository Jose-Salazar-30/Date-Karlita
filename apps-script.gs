/**
 * Backend sencillo para guardar las respuestas en Google Sheets.
 *
 * Cómo usarlo:
 * 1. Crea una hoja nueva en Google Sheets.
 * 2. Ve a Extensiones > Apps Script.
 * 3. Borra el código que aparezca y pega este archivo.
 * 4. Guarda.
 * 5. Implementar > Nueva implementación > Aplicación web.
 * 6. Ejecutar como: tú.
 * 7. Quién tiene acceso: Cualquiera.
 * 8. Copia la URL que termina en /exec y pégala en index.html.
 */

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = "Respuestas";
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  const headers = [
    "Fecha",
    "Tipo de lugar",
    "Vestimenta",
    "Comida",
    "Ambiente",
    "Adentro / aire libre",
    "Hora",
    "Postre",
    "Después de cenar",
    "Nivel de sorpresa",
    "Detalle especial",
    "Mensaje final"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  const p = e.parameter || {};
  sheet.appendRow([
    p.fecha || new Date(),
    p.tipoLugar || "",
    p.vestimenta || "",
    p.comida || "",
    p.ambiente || "",
    p.ubicacion || "",
    p.hora || "",
    p.postre || "",
    p.despues || "",
    p.sorpresa || "",
    p.detalle || "",
    p.mensaje || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
