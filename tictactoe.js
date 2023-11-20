//create and print board
board_dictionary = {
    a1: ' ', a2: ' ', a3: ' ',
    b1: ' ', b2: ' ', b3: ' ',
    c1: ' ', c2: ' ', c3: ' ',
}

available_spaces = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']

const setStartBoard = () => {
    console.log(board_dictionary)


}

const setGame = () => {
    console.log(board_dictionary);
    console.log(available_spaces);
    setStartBoard()
    playGame()
}

const a1Click = () => {
    console.log('Top Left Click!')
    if (board_dictionary.a1 == ' ') {
        board_dictionary.a1 = 'X';
        a1 = document.getElementById('a1');
        a1.innerText = 'X';
    }
}

const a2Click = () => {
    console.log('Top Left Click!')
}


const a3Click = () => {
    console.log('Top Left Click!')
}

const cpuTurn = () => {
    let spot = available_spaces[Math.floor(Math.random() * available_spaces.length)]
    space = document.getElementById(spot);
    space.innerText = 'O';
    index = available_spaces.indexOf(spot);
    available_spaces.splice(index, 1);
    checkWin('O');
}

const checkWin = (player) => {
    if (board_dictionary.a1 == player && board_dictionary.a2 == player && board_dictionary.a3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.a1 == player && board_dictionary.b1 == player && board_dictionary.c1 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.b1 == player && board_dictionary.b2 == player && board_dictionary.b3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.c1 == player && board_dictionary.c2 == player && board_dictionary.c3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.c1 == player && board_dictionary.b2 == player && board_dictionary.a3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.a2 == player && board_dictionary.c2 == player && board_dictionary.b2 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.a3 == player && board_dictionary.b3 == player && board_dictionary.c3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
    else if (board_dictionary.c3 == player && board_dictionary.b2 == player && board_dictionary.a1 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!';
    }
    else if (board_dictionary.c1 == player && board_dictionary.b2 == player && board_dictionary.a3 == player) {
        console.log('Player ' + player + ' WINS!')
        messageDisplay = document.getElementById('score-message');
        messageDisplay.innerText = 'Player ' + player + ' WINS!'
    }
}

const playerClick = () => {
    if (available_spaces.includes(event.target.id)) {

        gameBox = document.getElementById(event.target.id);
        gameBox.innerText = 'X';
        //Remove the element now
        index = available_spaces.indexOf(event.target.id);
        available_spaces.splice(index, 1);
        board_dictionary[event.target.id] = 'X';
        console.log(board_dictionary);
        checkWin('X')
        cpuTurn()
    }
    else {
        console.log('ALREADY TAKEN')
    }
}



const playGame = () => {

    playing = true



}