/**
 * Reveals all answers in the selected row.
 */
function revealAnswers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getActiveRange();
  const row = range.getRow();

  // Check if the selected row is an answer row (even-numbered)
  if (row % 2 === 0) {
    revealRowAnswers(sheet, row);
    console.log(`Revealed all answers in row ${row}`);
  } else {
    console.log('Selected row is not an answer row.');
  }
}

/**
 * Resets all answers in the selected row.
 */
function resetAnswers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getActiveRange();
  const row = range.getRow();

  // Check if the selected row is an answer row (even-numbered)
  if (row % 2 === 0) {
    resetRowAnswers(sheet, row);
    console.log(`Reset all answers in row ${row}`);
  } else {
    console.log('Selected row is not an answer row.');
  }
}

/**
 * Reveals all answers in all answer rows.
 */
function revealAllAnswers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();

  // Loop through all even-numbered rows (answer rows)
  for (let row = 2; row <= lastRow; row += 2) {
    revealRowAnswers(sheet, row);
  }
  console.log('Revealed all answers in all rows.');
}

/**
 * Resets all answers in all answer rows.
 */
function resetAllAnswers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();

  // Loop through all even-numbered rows (answer rows)
  for (let row = 2; row <= lastRow; row += 2) {
    resetRowAnswers(sheet, row);
  }
  console.log('Reset all answers in all rows.');
}

/**
 * Reveals all answers in a specific row.
 * @param {Sheet} sheet The active sheet.
 * @param {number} row The row number.
 */
function revealRowAnswers(sheet, row) {
  let col = 1;
  while (true) {
    const cell = sheet.getRange(row, col);
    if (cell.isBlank()) break; 
    cell.setFontColor('black'); 
    cell.setFontWeight('bold'); 
    col++;
  }
}

/**
 * Resets all answers in a specific row.
 * @param {Sheet} sheet The active sheet.
 * @param {number} row The row number.
 */
function resetRowAnswers(sheet, row) {
  let col = 1;
  while (true) {
    const cell = sheet.getRange(row, col);
    if (cell.isBlank()) break; 
    cell.setFontColor('white'); 
    cell.setFontWeight('normal'); 
    col++;
  }
}