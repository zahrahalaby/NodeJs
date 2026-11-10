// zahra halabi

const fs = require('fs');
const path = require('path');

// Directory containing the input files
const dirPath = path.join(__dirname, 'text');

// Check whether the directory exists
if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    process.exit(1);
}

// Array containing the names of the input files
const fileNames = [];

// Create 3 files, each containing between 1 and 25 lines.
for (let fileNumber = 1; fileNumber <= 3; fileNumber++) {
  const fileName = `input${fileNumber}.txt`;
  fileNames.push(fileName);

  const lineCount = Math.floor(Math.random() * 25) + 1;
  let fileContent = "";

  for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
    fileContent += `Line ${lineNumber} from file ${fileNumber}`;

    // Add a newline between lines, but not after the last line.
    if (lineNumber < lineCount) {
      fileContent += "\n";
    }
  }

  fs.writeFileSync(path.join(dirPath, fileName), fileContent);
}



try {
    const allLines = [];
    let maxLines = 0;
    let textOut='';

    for (let i = 0; i < fileNames.length; i++)  {
        const filePath = path.join(dirPath, fileNames[i]);
        const textIn = fs.readFileSync(filePath, 'utf8');
        const lines = textIn.split(/\r?\n/);

        if (lines[lines.length - 1] === '') {
            lines.pop();
        }

        allLines.push(lines);
        maxLines = Math.max(maxLines, lines.length);
    }

    let start = 0;
    let count = 1;

    while (start < maxLines) {
        for (let i = 0; i < allLines.length; i++) {
            const lines = allLines[i];
            for (let j = start; j < start + count && j < lines.length; j++) {
                textOut += lines[j] + '\n';
            }
        }

        start += count;
        count++;
    }

    console.log(textOut);
    fs.writeFileSync(path.join(dirPath, 'output.txt'), textOut, 'utf8');


} catch (error) {

    // Handle all errors
    console.log('Error: ' + error.message);

}
