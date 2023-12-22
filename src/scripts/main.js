let defaultBlackPieceColor = "blue";
let defaultWhitePieceColor = "red";

//chessboard tile position array
const tileLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const tileNumbers = [8, 7, 6, 5, 4, 3, 2, 1];

// generate chess piece
let chessBoardGrid = document.querySelector("[chessBoardGrid]");
tileNumbers.forEach((number) => {
  tileLetters.forEach((letter) => {
    let tile = document.createElement("div");
    tile.setAttribute("class", "tiles");
    tile.setAttribute("position-x", `${letter}`);
    tile.setAttribute("position-y", `${number}`);
    tile.innerText = letter + number;
    chessBoardGrid.append(tile);

    //set chess pieces
    if (number === 8) {
      let color = "black";
      if (letter === "A") {
        let pieceType = "rook";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftBlackRook = new ChessPiece(pieceType, color, number, letter);
        // leftBlackRook.getPosition();
      }
      if (letter === "B") {
        let pieceType = "knight";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftBlackKnight = new ChessPiece(pieceType, color, number, letter);
        // leftBlackKnight.getPosition();
      }
      if (letter === "C") {
        let pieceType = "bishop";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftBlackBishop = new ChessPiece(pieceType, color, number, letter);
        // leftBlackBishop.getPosition();
      }
      if (letter === "D") {
        let pieceType = "queen";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackQueen = new ChessPiece(pieceType, color, number, letter);
        // blackQueen.getPosition();
      }
      if (letter === "E") {
        let pieceType = "king";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackKing = new ChessPiece(pieceType, color, number, letter);
        // blackKing.getPosition();
      }
      if (letter === "F") {
        let pieceType = "bishop";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightBlackBishop = new ChessPiece(pieceType, color, number, letter);
        // rightBlackBishop.getPosition();
      }
      if (letter === "G") {
        let pieceType = "knight";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightBlackKnight = new ChessPiece(pieceType, color, number, letter);
        // rightBlackKnight.getPosition();
      }
      if (letter === "H") {
        let pieceType = "rook";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightBlackRook = new ChessPiece(pieceType, color, number, letter);
        // rightBlackRook.getPosition();
      }
    } else if (number === 7) {
      let pieceType = "pawn";
      let color = "black";
      if (letter === "A") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnA = new ChessPiece(pieceType, color, number, letter);
        // blackPawnA.getPosition();
        // console.log(blackPawnA);
      }
      if (letter === "B") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnB = new ChessPiece(pieceType, color, number, letter);
        // blackPawnB.getPosition();
        // console.log(blackPawnB);
      }
      if (letter === "C") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnC = new ChessPiece(pieceType, color, number, letter);
        // blackPawnC.getPosition();
        // console.log(blackPawnC);
      }
      if (letter === "D") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnD = new ChessPiece(pieceType, color, number, letter);
        // blackPawnD.getPosition();
        // console.log(blackPawnD);
      }
      if (letter === "E") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnE = new ChessPiece(pieceType, color, number, letter);
        // blackPawnE.getPosition();
        // console.log(blackPawnE);
      }
      if (letter === "F") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnF = new ChessPiece(pieceType, color, number, letter);
        // blackPawnF.getPosition();
        // console.log(blackPawnF);
      }
      if (letter === "G") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnG = new ChessPiece(pieceType, color, number, letter);
        // blackPawnG.getPosition();
        // console.log(blackPawnG);
      }
      if (letter === "H") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnH = new ChessPiece(pieceType, color, number, letter);
        // blackPawnH.getPosition();
        // console.log(blackPawnH);
      }
    } else if (number === 2) {
      let pieceType = "pawn";
      let color = "white";
      if (letter === "A") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnA = new ChessPiece(pieceType, color, number, letter);
        // blackPawnA.getPosition();
      }
      if (letter === "B") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnB = new ChessPiece(pieceType, color, number, letter);
        // blackPawnB.getPosition();
      }
      if (letter === "C") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnC = new ChessPiece(pieceType, color, number, letter);
        // blackPawnC.getPosition();
      }
      if (letter === "D") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnD = new ChessPiece(pieceType, color, number, letter);
        // blackPawnD.getPosition();
      }
      if (letter === "E") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnE = new ChessPiece(pieceType, color, number, letter);
        // blackPawnE.getPosition();
      }
      if (letter === "F") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnF = new ChessPiece(pieceType, color, number, letter);
        // blackPawnF.getPosition();
      }
      if (letter === "G") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnG = new ChessPiece(pieceType, color, number, letter);
        // blackPawnG.getPosition();
      }
      if (letter === "H") {
        pieceGenerator(pieceType, color, number, letter, tile);
        // let blackPawnH = new ChessPiece(pieceType, color, number, letter);
        // blackPawnH.getPosition();
      }
    } else if (number === 1) {
      let color = "white";
      if (letter === "A") {
        let pieceType = "rook";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftWhiteRook = new ChessPiece(pieceType, color, number, letter);
        // leftWhiteRook.getPosition();
      }
      if (letter === "B") {
        let pieceType = "knight";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftWhiteKnight = new ChessPiece(pieceType, color, number, letter);
        // leftWhiteKnight.getPosition();
      }
      if (letter === "C") {
        let pieceType = "bishop";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let leftWhiteBishop = new ChessPiece(pieceType, color, number, letter);
        // leftWhiteBishop.getPosition();
      }
      if (letter === "D") {
        let pieceType = "queen";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let whiteQueen = new ChessPiece(pieceType, color, number, letter);
        // whiteQueen.getPosition();
      }
      if (letter === "E") {
        let pieceType = "king";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let whiteKing = new ChessPiece(pieceType, color, number, letter);
        // whiteKing.getPosition();
      }
      if (letter === "F") {
        let pieceType = "bishop";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightWhiteBishop = new ChessPiece(pieceType, color, number, letter);
        // rightWhiteBishop.getPosition();
      }
      if (letter === "G") {
        let pieceType = "knight";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightWhiteKnight = new ChessPiece(pieceType, color, number, letter);
        // rightWhiteKnight.getPosition();
      }
      if (letter === "H") {
        let pieceType = "rook";
        pieceGenerator(pieceType, color, number, letter, tile);
        // let rightWhiteRook = new ChessPiece(pieceType, color, number, letter);
        // rightWhiteRook.getPosition();
      }
    }
  });
});

//all tiles click listener
let tiles = document.querySelectorAll(".tiles");

// default tile color
let defaultTileColor = {
  light: "lightgray",
  dark: "darkgray",
};

tiles.forEach((tile) => {
  let tilePositionX = tile.getAttribute("position-x");
  let tilePositionY = tile.getAttribute("position-y");

  tile.addEventListener("click", () => {
    //if there's no piece
    if (tile.querySelector("i") === null) {
      console.log(`tile.position = ${tilePositionX}:${tilePositionY}`);
    }

    //if there is a piece
    else {
      let selectedPiece = tile.querySelector("i");
      let pieceType = selectedPiece.getAttribute("piece-type");
      let pieceColor = selectedPiece.getAttribute("piece-color");

      // console.log(pieceType);
      // console.log(pieceColor);
      // console.log(tilePositionY);
      // console.log(tilePositionX);

      //create object
      let chessPiece = new ChessPiece(
        pieceType,
        pieceColor,
        tilePositionY,
        tilePositionX,
        tile
      );
      chessPiece.moveValidator();
    }
  });

  //add chess alternative color tiles
  (["8", "6", "4", "2"].includes(tilePositionY) &&
    ["B", "D", "F", "H"].includes(tilePositionX)) ||
  (["7", "5", "3", "1"].includes(tilePositionY) &&
    ["A", "C", "E", "G"].includes(tilePositionX))
    ? (tile.style.backgroundColor = defaultTileColor.dark)
    : (tile.style.backgroundColor = defaultTileColor.light);
});

//click event listener for each piece
pieceColorSelector("white");
pieceColorSelector("black");
