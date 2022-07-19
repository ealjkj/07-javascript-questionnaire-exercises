// Chess move verifier:
// For more info check 38-myOwnDesign.txt

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
}

class Piece {
    constructor(square) {
        this.square = square;
    }
}

class Pawn extends Piece {
    legalMoves() {

    }
    legalCaptures() {
        
    }
}


// 
const board = new Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
console.table(board.squares);