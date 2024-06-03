// the process object is a global object that provides information about,
// and control over, the current Node.js process. As a global, it is always available to Node.js
// applications without using require(). It can be accessed from anywhere in your code.'

console.log(process.argv)
//process.argv contains the command line arguments that were used to run the Node.js process.
// The first element in the process.argv array is the process.execPath.
// The second element will be the path to the JavaScript file being executed.
// The remaining elements will be any additional command line arguments.

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(`${greeting} ${user}`)