/*
Script designed by Drey for Association of Demography and Social Statistic Students OAU
This script generates a 6-character alphanumeric code for each student so they can use it to vote for their preferred candidate on election day.
*/


function generateUniqueCodes() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var dataRange = sheet.getDataRange();
    var dataValues = dataRange.getValues();
  
    for (var i = 1; i < dataValues.length; i++) {
      var row = dataValues[i];
      var code = row[2]; // Check if code already exists in the third column
  
      if (!code) { // Generate code only if it doesn't exist
        code = generateCode();
        sheet.getRange(i + 1, 3).setValue(code); // Set the generated code in the third column
      }
    }
  }
  
  function generateCode() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var code = '';
  
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      code += chars.charAt(randomIndex); // Append a random character from the character set
    }
  
    return code; // Return the generated code
  }
  
  /*
HOW TO USE THE SCRIPT:
1. Create a Google Spreadsheet.
2. The Google Spreadsheet should have columns for id, name, part or level, and code.
3. Input data for all eligible voters. Fill in the id, name, and level fields only. The script will automatically generate the code.
4. Click on "Extensions" and select "Apps Script".
5. Copy and paste the code from the script.js file into the text editor that appears after selecting "Apps Script".
6. Save the script and click on the "Run" button at the top of the text editor.

By following the above steps, you should see a generated code for all students. Note that you need to rerun the script each time a new student is added or updated in order for the code to be updated for the new student.
*/