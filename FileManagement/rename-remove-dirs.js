const fs = require('fs');

fs.mkdirSync("./FileManagement/create-dir");  // Creating a directory

fs.renameSync("./FileManagement/create-dir", "./FileManagement/renamed-dir");  // Renaming a directory

// fs.rmdir("./FileManagement/renamed-dir", (err) => { // Removing a directory
//     if (err) {
//         throw err;
//     }
//     console.log("Directory Removed");
// });

fs.readdirSync('./FileManagement/renamed-dir').forEach(fileName => {
    fs.unlinkSync(`./FileManagement/renamed-dir/${fileName}`);
});

fs.rmdir("./FileManagement/renamed-dir", (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory Removed");
});