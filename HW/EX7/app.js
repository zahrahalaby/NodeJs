// zahra halabi

const fs = require('fs');
const path = require('path');

try {
    // Read the JSON file and convert its content into an array.
    const filePath = path.join(__dirname, 'data', 'users.json');
    const textIn = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(textIn);

    // Count the users.
    const userCount = users.length;

    // Collect the user names, one name per line.
    let userNames = '';

    for (let i = 0; i < users.length; i++) {
        userNames += users[i].name + '\n';
    }

    // Write the number of users to a text file.
    fs.writeFileSync(
        path.join(__dirname, 'data', 'user_count.txt'),
        String("user count: " + userCount),
        'utf8'
    );

    // Write the user names to a text file.
    fs.writeFileSync(
        path.join(__dirname, 'data', 'user_names.txt'),
        String("User names:\n" + userNames),
        'utf8'
    );

} catch (error) {
    console.log('Error: ' + error.message);
}
