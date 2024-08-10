//Importa constantes da classe 
import { COORDINATES_MAP, PLAYERS, STEP_LENGTH } from './constants.js';

//Seleciona o botão do dado
const diceButtonElement = document.querySelector('#dice-btn');

//PlayerPicesElements armazena todos os elementos das peças do tabuleiro
const playerPiecesElements = {
    //De P1
    P1: document.querySelectorAll('[player-id="P1"].player-piece'),

    //De P2
    P2: document.querySelectorAll('[player-id="P2"].player-piece'),
}

export class UI {
    //Métodos estáticos

    //Método que realiza a escuta do click no botão rolar
    static listenDiceClick(callback) {
        diceButtonElement.addEventListener('click', callback);
    }

    //Método que realiza a escuta do click no botão reset
    static listenResetClick(callback) {
        document.querySelector('button#reset-btn').addEventListener('click', callback)
    }

    //Método que verifica se está clicando nas peças
    static listenPieceClick(callback) {
        document.querySelector('.player-pieces').addEventListener('click', callback)
    }

    /**
     * 
     * @param {string} player 
     * @param {Number} piece 
     * @param {Number} newPosition 
     */
    //Realiza a definição das posições do jogador
    static setPiecePosition(player, piece, newPosition) {
        if(!playerPiecesElements[player] || !playerPiecesElements[player][piece]) {
            console.error(`Player element of given player: ${player} and piece: ${piece} not found`)
            return;
        }

        //Define a posição de acordo com as posições do arquivo constants minuto 17:33
        const [x, y] = COORDINATES_MAP[newPosition];

        //Coleta qual o jogador atual e sua respectiva peça (0, 1, 2, 3)
        const pieceElement = playerPiecesElements[player][piece];
        
        //Passa 6,66%
        pieceElement.style.top = y * STEP_LENGTH + '%';
        pieceElement.style.left = x * STEP_LENGTH + '%';
    }

    static setTurn(index) {
        if(index < 0 || index >= PLAYERS.length) {
            console.error('index out of bound!');
            return;
        }
        
        //Seleciona qual o jogador P1 ou P2
        const player = PLAYERS[index];

        // Demonstra qual é o jogador atual
        document.querySelector('.active-player span').innerText = player;

        //Base do jogador ativo
        const activePlayerBase = document.querySelector('.player-base.highlight');
        //Serve para remover se já possuir um elemento com essa classe
        if(activePlayerBase) {
            activePlayerBase.classList.remove('highlight');
        }
        // highlight
        document.querySelector(`[player-id="${player}"].player-base`).classList.add('highlight')
    }

    //Método que define o botão do dado ativo
    static enableDice() {
        diceButtonElement.removeAttribute('disabled');
    }

    //Método que define o botão do dado desabilitado
    static disableDice() {
        diceButtonElement.setAttribute('disabled', '');
    }

    /**
     * 
     * @param {string} player 
     * @param {Number[]} pieces 
     */
    //Método que define o destaque das peças
    static highlightPieces(player, pieces) {
        //Para cada peça, coloca classe highlight
        pieces.forEach(piece => {
            const pieceElement = playerPiecesElements[player][piece];
            pieceElement.classList.add('highlight');
        })
    }

    //Remove as classes highlight
    static unhighlightPieces() {
        document.querySelectorAll('.player-piece.highlight').forEach(ele => {
            ele.classList.remove('highlight');
        })
    }

    //Define um valor para o dado
    static setDiceValue(value) {
        document.querySelector('.dice-value').innerText = value;
    }
}

// UI.setPiecePosition('P1', 0, 0);
// UI.setTurn(0);
// UI.setTurn(1);

// UI.disableDice();
// UI.enableDice();
// UI.highlightPieces('P1', [0]);
// UI.unhighlightPieces();
// UI.setDiceValue(5);