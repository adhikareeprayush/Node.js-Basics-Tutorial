const waitInterval = 500
let currentTime = 0
console.log(`setting a ${waitInterval / 1000} second interval`)

const timerFinished = () => {
    clearInterval(interval);
}

setTimeout(timerFinished, 3000)

const incTime = () => {
    currentTime += waitInterval
    const p = Math.floor((currentTime / 3000) * 100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`)
}

const interval = setInterval(incTime, waitInterval)