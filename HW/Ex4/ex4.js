/**
 * Programmer: Zahra halabi
 *
 * Description:
 * Reads 10 input text files, copies an increasing number of lines from each file (1 from the first file, 2 from the second, ..., 10 from the tenth), 
 * combines the copied lines, and saves them into output.txt. The program includes error handling for missing files, missing directories, 
 * and files that do not contain the required number of lines.
 */

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
const files = [
    'input1.txt',
    'input2.txt',
    'input3.txt',
    'input4.txt',
    'input5.txt',
    'input6.txt',
    'input7.txt',
    'input8.txt',
    'input9.txt',
    'input10.txt'
];

let textOut = '';

try {

    // Process each file
    for (let i = 0; i < files.length; i++) {

        const filePath = path.join(dirPath, files[i]);

        // Read the current file
        const textIn = fs.readFileSync(filePath, 'utf8');

        // Split file content into lines
        const lines = textIn.split(/\r?\n/);

        // Remove the last empty element if it exists
        if (lines[lines.length - 1] === '') {
            lines.pop();
        }

        const requiredLines = i + 1;

        // Stop the program if the file does not contain enough lines
        if (lines.length < requiredLines) {
            throw new Error(
                `${files[i]} contains only ${lines.length} lines. ` +
                `${requiredLines} lines are required.`
            );
        }

        // Copy the required number of lines
        for (let j = 0; j < requiredLines; j++) {
            textOut += lines[j] + '\n';
        }
    }

    // Display the result
    console.log(textOut);

    // Write the result to the output file
    fs.writeFileSync(
        path.join(dirPath, 'output.txt'),
        textOut,
        'utf8'
    );

    console.log('Output file created successfully.');

} catch (error) {

    // Handle all errors
    console.log('Error: ' + error.message);

}
