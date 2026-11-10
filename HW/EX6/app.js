// zahra halabi

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "text");

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

// Read each file and store its lines in a separate array.
const fileLines = [];

for (let i = 0; i < fileNames.length; i++) {
  const fileContent = fs.readFileSync(
    path.join(dirPath, fileNames[i]),
    "utf-8"
  );

  fileLines.push(fileContent.split(/\r?\n/));
}

let linesPerRound = 1;
let startIndex = 0;
let resultContent = "";

const maxLineCount = Math.max(...fileLines.map((lines) => lines.length));

// Take 1 line from each file, then 2, then 3, and so on.
// Stop when all lines in the longest file have been processed.
while (startIndex < maxLineCount) {
  for (let fileIndex = 0; fileIndex < fileLines.length; fileIndex++) {
    for (let offset = 0; offset < linesPerRound; offset++) {
      const lineIndex = startIndex + offset;

      // Skip indexes beyond the end of the current file.
      if (lineIndex < fileLines[fileIndex].length) {
        resultContent += `${fileLines[fileIndex][lineIndex]}\n`;
      }
    }
  }

  // Move to the next unread line and increase the next round's size.
  startIndex += linesPerRound;
  linesPerRound++;
}

fs.writeFileSync(path.join(dirPath, "result.txt"), resultContent);
