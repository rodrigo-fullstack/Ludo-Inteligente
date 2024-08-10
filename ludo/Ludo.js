import { BASE_POSITIONS, HOME_ENTRANCE, HOME_POSITIONS, PLAYERS, SAFE_POSITIONS, START_POSITIONS, STATE, TURNING_POINTS } from './constants.js';
import { UI } from './UI.js';
import RespostaControlador from './Resposta.js';

/*
Tarefas

1. COmo implementar as perguntas no Ludo
2. Melhorar design do botão de rolar
3. Melhorar o design do acerto ou erro
4. COlocar popup na mesma página com menos foco para o ludo
*/


export class Ludo {
    //Posições Atuais
    currentPositions = {
        P1: [],
        P2: []
    }

    //Valor do dado
    _diceValue;
    //Getter e Setter do valor do Dado
    get diceValue() {
        return this._diceValue;
    }
    set diceValue(value) {
        this._diceValue = value;

        UI.setDiceValue(value);
    }
    
    _turn;
    get turn() {
        return this._turn;
    }
    set turn(value) {
        this._turn = value;
        UI.setTurn(value);
    }
    
    //Estado
    _state;
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
        
        //Se dado não foi rolado, ativa o botão do dado
        if(value === STATE.DICE_NOT_ROLLED) {
            UI.enableDice();
            UI.unhighlightPieces();
        } else { //Se sim, desabilita
            UI.disableDice();
        }
    }
    

    constructor() {
        //Começa com Hello World
        console.log('Hello World! Lets play Ludo!');

        // this.diceValue = 4;
        // this.turn = 0;
        // this.state = STATE.DICE_ROLLED;

        //Quando cria, já executa os event listeners
        // Escuta o click do mouse sobre o botão do dado
        this.listenDiceClick();
        this.listenResetClick();
        this.listenPieceClick();

        this.controladorResposta = new RespostaControlador();

        this.resetGame();
        // this.setPiecePosition('P1', 0, 0);
        // this.setPiecePosition('P2', 0, 1);
        // this.diceValue = 6;
        // console.log(this.getEligiblePieces('P1'))
        
    }
    
    listenDiceClick() {
        
        UI.listenDiceClick(this.onDiceClick.bind(this))
    }

    onDiceClick() {
        console.log('dice clicked!');

        //Definir passo manualmente

        this.controladorResposta.executarSorteio()

        this.controladorResposta.esperarValidarResposta()
        .then(() => {
            if(this.controladorResposta.acerto){
                alert("Você acertou.")
                this.diceValue = +prompt("Quanto o usuário vai andar?");
            } else{
                alert("Você errou. Anda somente duas casas e paga uma prenda.")
                this.diceValue = 2;
            }
            // this.diceValue = this.controladorResposta.passo

            this.state = STATE.DICE_ROLLED;
            this.checkForEligiblePieces();
        }) 

        /*
        1. Esperar até que o botão de admitir seja clicado
        2. Se o botão foi apertado, deve exibir o input ou retornar o devido valor
        */
        //this.diceValue = 

        // let contador = 0
        // while(!this.controladorResposta.botaoAdmitirClicado){
        //     setTimeout(
        //         () => {
        //             console.log("Olá, mundo")
        //             contador++

        //         },1000
        //     )
        //     if(contador == 10) break;
        // }

        // let tempo = 0
        // while(!this.controladorResposta.botaoAdmitirClicado){
        //     setTimeout(
        //         () => {
        //             console.log("1 segundo")
        //             console.log(tempo / 1000 + " segundos");
        //             tempo += 1000;
        //         },1000
        //     )
        //     if(tempo == this.controladorResposta.tempo){
        //         this.controladorResposta.validarResposta();
        //         break
        //     }
        // }
        



        // this.diceValue = this.controladorResposta.passo;
        //COmo fazer para implementar as perguntas no ludo
        //this.controladorResposta.executarSorteio();
        //console.log(this.controladorResposta.resposta)
        //Aleatoriza um número de 1 a 6
        // if(acerto && dificuldade == "Fácil" ){
        //     this.diceValue = 8;
        // }
        // else if(acerto && dificuldade == "Média"){
        //     this.diceValue = 10;
        // }
        // else if(acerto && dificuldade == "Difícil"){
        //     this.diceValue = 12
        // }

        //Muda o estado para rolado
        // this.state = STATE.DICE_ROLLED;
        

        // this.checkForEligiblePieces();
    }

    checkForEligiblePieces() {
        const player = PLAYERS[this.turn];
        // eligible pieces of given player
        const eligiblePieces = this.getEligiblePieces(player);
        if(eligiblePieces.length) {
            // highlight the pieces
            UI.highlightPieces(player, eligiblePieces);
        } else {
            this.incrementTurn();
        }
    }

    incrementTurn() {
        this.turn = this.turn === 0 ? 1 : 0;
        this.state = STATE.DICE_NOT_ROLLED;
    }

    getEligiblePieces(player) {
        return [0, 1, 2, 3].filter(piece => {
            const currentPosition = this.currentPositions[player][piece];

            if(currentPosition === HOME_POSITIONS[player]) {
                return false;
            }

            if(
                BASE_POSITIONS[player].includes(currentPosition)
                && this.diceValue !== 6
            ){
                return false;
            }

            if(
                HOME_ENTRANCE[player].includes(currentPosition)
                && this.diceValue > HOME_POSITIONS[player] - currentPosition
                ) {
                return false;
            }

            return true;
        });
    }

    listenResetClick() {
        UI.listenResetClick(this.resetGame.bind(this))
    }

    resetGame() {
        console.log('reset game');
        this.currentPositions = structuredClone(BASE_POSITIONS);

        PLAYERS.forEach(player => {
            [0, 1, 2, 3].forEach(piece => {
                this.setPiecePosition(player, piece, this.currentPositions[player][piece])
            })
        });

        this.turn = 0;
        this.state = STATE.DICE_NOT_ROLLED;
    }

    // Escuta o click nas peças
    listenPieceClick() {
        UI.listenPieceClick(this.onPieceClick.bind(this));
    }

    //Quando clica
    onPieceClick(event) {
        const target = event.target;

        if(!target.classList.contains('player-piece') || !target.classList.contains('highlight')) {
            return;
        }
        console.log('piece clicked')

        const player = target.getAttribute('player-id');
        const piece = target.getAttribute('piece');
        this.handlePieceClick(player, piece);
    }

    handlePieceClick(player, piece) {
        console.log(player, piece);
        const currentPosition = this.currentPositions[player][piece];
        
        if(BASE_POSITIONS[player].includes(currentPosition)) {
            this.setPiecePosition(player, piece, START_POSITIONS[player]);
            this.state = STATE.DICE_NOT_ROLLED;
            return;
        }

        UI.unhighlightPieces();
        this.movePiece(player, piece, this.diceValue);
    }

    setPiecePosition(player, piece, newPosition) {
        this.currentPositions[player][piece] = newPosition;
        UI.setPiecePosition(player, piece, newPosition)
    }

    movePiece(player, piece, moveBy) {
        // this.setPiecePosition(player, piece, this.currentPositions[player][piece] + moveBy)
        const interval = setInterval(() => {
            this.incrementPiecePosition(player, piece);
            moveBy--;

            if(moveBy === 0) {
                clearInterval(interval);

                // check if player won
                if(this.hasPlayerWon(player)) {
                    alert(`Player: ${player} has won!`);
                    this.resetGame();
                    return;
                }

                const isKill = this.checkForKill(player, piece);

                if(isKill || this.diceValue === 6) {
                    this.state = STATE.DICE_NOT_ROLLED;
                    return;
                }

                this.incrementTurn();
            }
        }, 200);
    }

    checkForKill(player, piece) {
        const currentPosition = this.currentPositions[player][piece];
        const opponent = player === 'P1' ? 'P2' : 'P1';

        let kill = false;

        [0, 1, 2, 3].forEach(piece => {
            const opponentPosition = this.currentPositions[opponent][piece];

            if(currentPosition === opponentPosition && !SAFE_POSITIONS.includes(currentPosition)) {
                this.setPiecePosition(opponent, piece, BASE_POSITIONS[opponent][piece]);
                kill = true
            }
        });

        return kill
    }

    hasPlayerWon(player) {
        return [0, 1, 2, 3].every(piece => this.currentPositions[player][piece] === HOME_POSITIONS[player])
    }

    incrementPiecePosition(player, piece) {
        this.setPiecePosition(player, piece, this.getIncrementedPosition(player, piece));
    }
    
    getIncrementedPosition(player, piece) {
        const currentPosition = this.currentPositions[player][piece];

        if(currentPosition === TURNING_POINTS[player]) {
            return HOME_ENTRANCE[player][0];
        }
        else if(currentPosition === 51) {
            return 0;
        }
        return currentPosition + 1;
    }
}