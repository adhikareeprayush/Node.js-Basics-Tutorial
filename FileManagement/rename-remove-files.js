const fs = require('fs');

// fs.renameSync("./FileManagement/sample.md", "./FileManagement/renamed-sample.md");  // Renaming a file
// console.log("File Renamed");
// fs.rename("./FileManagement/notes.md", "./FileManagement/renamed-notes.md", (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File Renamed");
// });

fs.unlink("./FileManagement/readme.md", (err) => {
    if (err) {
        throw err;
    }
    console.log("File Removed");
});