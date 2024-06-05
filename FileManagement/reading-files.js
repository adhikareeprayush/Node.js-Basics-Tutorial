const fs = require('fs');

// let ipsum = fs.readFileSync("./readme.md", "UTF-8");

let ipsum = fs.readFile("./FileManagement/readme.md/", "UTF-8", (err, text) => {
    if (err) {
        throw err;
    }
    console.log(text);
});

