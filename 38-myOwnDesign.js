// chess FEN Loader

// FEN stands for Forsyth-Edwards Notation. I want to be able to see a chess board with the pieces by just loading a FEN string.

// In order to do that I decided to create a Board class where I was gonna have a method called loadFEN, that will store information about the position.

// I also need a display method that will take the information and log it as a table.


class Position {
    constructor()
}
class Board {
    constructor(fen = "8/8/8/8/8/8/8/8 w - - 0 1") {
        this.fen = fen;
        this.loadFEN(fen);
    }   

    loadFEN() {
        const fenParts =  this.fen.split(" ");
        // Build bord
        this.squares = [];
        for(let row of fenParts[0].split("/")) {
            this.squares.push([]);
            for(let p of row) {
                const number = Number(p);
                if(!Number.isNaN(number)) this.squares.at(-1).push(...Array(number).fill(" "));
                else this.squares.at(-1).push(p); 
            }
        }

        // save details
        this.activeColor = fenParts[2];
        this.castingAvailability = {
            white: {
                queenSide: fenParts[3].includes("Q"),
                kingSide: fenParts[3].includes("K")
            },

            black: {
                queenSide: fenParts[3].includes("q"),
                kingSide: fenParts[3].includes("k")
            }
        }

        this.enPassantTargetSquare = fenParts[3];
        this.halfMoveClock = Number(fenParts[4]);
        this.fullMoveNumber = Number(fenParts[5]);
    }

    display() {
        console.table(this.squares)
    }
}


// 
const board = new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
board.display();