const readline = require('readline')
const log = console.log
const randNum = Math.floor(Math.random() * 101)
console.log('Загадано число в диапазоне от 0 до 100')

const rl = readline.createInterface(process.stdin, process.stdout)

const guessTheNumber = function (randNum) {
    rl.question('', (ans) => {
        if (ans > randNum) {
            log('Меньше!')
        } else if (ans < randNum) {
            log('Больше!')
        } else {
            log(`Отгадано число ${randNum}`)
            return rl.close()
        }
        guessTheNumber(randNum)
    })
}
guessTheNumber(randNum)
