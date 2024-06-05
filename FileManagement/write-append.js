const fs = require('fs');

let md = `
    This is a New File
    ==================

    ES6 is a nice improvement

    * Added let and const
    * Added template strings
    * Added arrow functions
`

fs.writeFile("./FileManagement/sample.md", md.trim(), (err) => {
    if (err) {
        throw err;
    }
    fs.appendFileSync("./FileManagement/sample.md", "\n\n# New Content\n\nThis is a new file created using fs.appendFileSync() method.");
    console.log("File Created");
});