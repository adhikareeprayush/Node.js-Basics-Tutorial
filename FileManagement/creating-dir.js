const fs = require('fs');

if (fs.existsSync('./FileManagement/create-dir')) {
    console.log("Directory already exists");
} else {
    fs.mkdir('./FileManagement/create-dir', (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory Created");
    });
}