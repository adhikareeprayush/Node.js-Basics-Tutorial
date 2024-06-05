const fs = require('fs');

let stream = fs.createReadStream(
    "./FileManagement/chatlog/chatlog.log",
    "UTF-8"
);

let data;

stream.once("data", (chunk) => {
    console.log(`Reading stream started...`)
    console.log(chunk)
})

stream.on("data", (chunk) => {
    console.log(`chunk: ${chunk.length} characters.`)
    data += chunk;
})

stream.on("end", () => {
    console.log("Finished reading file.")
    console.log(`In total, read ${data.length} characters.`)
})

console.log("Reading file...")