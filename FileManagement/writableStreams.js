const fs = require('fs');

let answerStream = null;

let questions = [
    "What is your name?",
    "What is your favorite color?",
    "What is your favorite food?"
];

let answers = [];

function ask(i) {
    if (i < questions.length) {
        process.stdout.write(`\n\n\n${questions[i]}`);
        process.stdout.write(" > ");
    }
}

process.stdin.on('data', function (data) {
    let answer = data.toString().trim();
    answers.push(answer);

    if (answerStream) {
        answerStream.write(`Question: ${questions[answers.length - 1]}\n`);
        answerStream.write(`Answer: ${answer}\n\n`);
    }

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.stdin.once("data", (data) => {
    let name = data.toString().trim();
    let fileName = `${name}.md`;
    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }
    answerStream = fs.createWriteStream(fileName);
    answerStream.write(`# ${name}'s Answers\n\n`);
    answers.push(name); // Add the name as the first answer
    ask(answers.length); // Ask the next question
});

process.on('exit', function () {
    if (answerStream) {
        answerStream.end();
    }
    process.stdout.write("\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]}`);
    process.stdout.write("\n\n\n");
});

ask(answers.length);
