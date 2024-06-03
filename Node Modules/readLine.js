const collectAnswer = require('./lib/collectAnswer')

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node? "
]

const answerEvents = collectAnswer(questions, (answers) => {
    console.log("Thank you for your answers.")
    console.log(answers)
    process.exit()
})

answerEvents.on('answer', answer => console.log(`question answered: ${answer}`))