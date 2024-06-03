const waitInterval = 500
let currentTime = 0
console.log(`setting a ${waitInterval / 1000} second interval`)

const timerFinished = () => {
    clearInterval(interval);
    console.log('done')
}

setTimeout(timerFinished, 3000)

const incTime = () => {
    currentTime += waitInterval
    console.log(`waiting ${currentTime / 1000} seconds`)
}

const interval = setInterval(incTime, waitInterval)