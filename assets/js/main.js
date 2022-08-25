// task: Write a function that displays a text after 3 seconds. Use setTimeout.

/* console.log('Start Warten für 3 Sekunden…')
setTimeout(function task1() { console.log('Erledigt. Du hast 3 Sekunden verschwendet.') }, 3000) */


// task: Write a function that displays the result of the given preview. Use setInterval and new Date().

/* setInterval(function task2() { console.log(new Date().toLocaleTimeString()) }, 1000) */


// task: Write a function that displays the result of the given preview. Use setInterval, clearInterval and if, else.

let counter = 10
let myInterval = setInterval(task3, 1000)

function task3() {
    if (counter === 0) {
        console.log('Endlich Feierabend!')
        clearInterval(myInterval)
    } else {
        console.log(counter--)
    }
}
