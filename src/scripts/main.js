//chessboard tile position array
const tileLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const tileNumbers = [8, 7, 6, 5, 4, 3, 2, 1];

// generate chess piece
let chessBoardGrid = document.querySelector("[chessBoardGrid]");
tileNumbers.forEach((number) => {
  tileLetters.forEach((letter) => {
    let tile = document.createElement("div");
    tile.setAttribute("class", "tiles");
    tile.innerText = letter + number;
    chessBoardGrid.append(tile);

    //pawn generator
    if (number === 7) {
      pieceGenerator("pawn", "black", number, letter, tile);
    } else if (number === 2) {
      pieceGenerator("pawn", "white", number, letter, tile);
    }

    //king generator
    else if (number === 8 && letter === "D") {
      pieceGenerator("king", "black", number, letter, tile);
    } else if (number === 1 && letter === "D") {
      pieceGenerator("king", "white", number, letter, tile);
    }

    //queen generator
    else if (number === 8 && letter === "E") {
      pieceGenerator("queen", "black", number, letter, tile);
    } else if (number === 1 && letter === "E") {
      pieceGenerator("queen", "white", number, letter, tile);
    }

    //rook generator
    else if (
      (number === 8 && letter === "A") ||
      (number === 8 && letter === "H")
    ) {
      pieceGenerator("rook", "black", number, letter, tile);
    } else if (
      (number === 1 && letter === "A") ||
      (number === 1 && letter === "H")
    ) {
      pieceGenerator("rook", "white", number, letter, tile);
    }

    //knight generator
    else if (
      (number === 8 && letter === "B") ||
      (number === 8 && letter === "G")
    ) {
      pieceGenerator("knight", "black", number, letter, tile);
    } else if (
      (number === 1 && letter === "B") ||
      (number === 1 && letter === "G")
    ) {
      pieceGenerator("knight", "white", number, letter, tile);
    }

    //bishop generator
    else if (
      (number === 8 && letter === "C") ||
      (number === 8 && letter === "F")
    ) {
      pieceGenerator("bishop", "black", number, letter, tile);
    } else if (
      (number === 1 && letter === "C") ||
      (number === 1 && letter === "F")
    ) {
      pieceGenerator("bishop", "white", number, letter, tile);
    }
  });
});

function pieceGenerator(peiceType, pieceColor, number, letter, tile) {
  let piece = document.createElement("img");
  piece.setAttribute("class", peiceType);
  piece.setAttribute("src", `./src/chessPieces/${pieceColor}/${peiceType}.png`);
  piece.classList.add(`${pieceColor}Piece`);
  piece.setAttribute("position-x", `${letter}`);
  piece.setAttribute("position-y", `${number}`);
  tile.append(piece);
}

function piceColorSelector() {}

let allWhitePieces = document.querySelectorAll(".whitePiece");
allWhitePieces.forEach((whitePieces) => {
  whitePieces.addEventListener("click", () => {
    allWhitePieces.forEach((piece) => piece.classList.remove("selectedPiece"));
    whitePieces.classList.add("selectedPiece");
  });
});
