// chess FEN Loader

// FEN stands for Forsyth-Edwards Notation. I want to be able to see a chess board with the pieces by just loading a FEN string.

// In order to do that I decided to create a Board class where I was gonna have a method called loadFEN, that will store information about the position.

// I also need a display method that will take the information and log it as a table.

class FENManager {
    constructor(fen) {
        this.fen = fen;
        this.fenParts =  this.fen.split(" ");
    }

    getBoardInfo() {
        const info = {};
        for(let i = 0; i < 8; i++) {
            const row = this.fenParts[0].split("/")[i];
            const rowLabel = 8 - i;
            let j = 0;
            for(let piece of row) {
                const columnLabel = 'hgfedcba'[j];
                const number = Number(piece)
                if(!Number.isNaN(number)) {
                    j += number;
                }
                else {
                    info[columnLabel + rowLabel] = piece;
                    j+=1;
                } 
            }

        }
        return info;
    } 

    getBoardDetails() {
        this.state = {};
        this.state.activeColor = this.fenParts[2];
        this.state.castingAvailability = {
            white: {
                queenSide: this.fenParts[3].includes("Q"),
                kingSide: this.fenParts[3].includes("K")
            },

            black: {
                queenSide: this.fenParts[3].includes("q"),
                kingSide: this.fenParts[3].includes("k")
            }
        }

        this.state.enPassantTargetSquare = this.fenParts[3];
        this.state.halfMoveClock = Number(this.fenParts[4]);
        this.state.fullMoveNumber = Number(this.fenParts[5]);
    }
}


class Board {
    constructor(info = {}) {
        this.squares = Array(8).fill("placeholder");
        this.fill(info);
    } 

    fill(info) {
        for(let row in this.squares) {
            this.squares[row] = Array(8).fill(" ");
            const rowLabel = 8 - (+row);
            for(let column in this.squares[row]) {
                const columnLabel = 'hgfedcba'[column]
                const squareLabel = columnLabel + rowLabel;

                if(info[squareLabel]) {
                    this.squares[row][column] = info[squareLabel];
                }
            }
        }
    }

    display() {
        console.table(this.squares)
    }
}




class StatefulBoard extends Board {
    constructor(info, state) {
        super(info);
        this.state = state;
    }

    loadFEN(fen) {
        const manager = new FENManager(fen);
        const info = manager.getBoardInfo();
        this.state = manager.getBoardDetails();
        this.fill(info);
    }
}

const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
const board = new StatefulBoard();
board.loadFEN(fen);
board.display();