function test(pieceType, selectedPiecePosition) {
  // console.log("test");
  // console.log(selectedPiece);
  console.log(pieceType + ": " + selectedPiecePosition);
}

function pieceGenerator(pieceType, pieceColor, number, letter, tile) {
  let piece = document.createElement("i");
  // piece.setAttribute("class", pieceType);
  // piece.setAttribute("src", `./src/chessPieces/${pieceColor}/${pieceType}.png`);
  piece.setAttribute("piece-color", `${pieceColor}`);
  piece.classList.add("fa-solid");
  piece.setAttribute("piece-type", `${pieceType}`);
  piece.classList.add(`fa-chess-${pieceType}`);
  piece.classList.add(`${pieceColor}Piece`);
  tile.append(piece);

  //assign color to pieces
  piece.getAttribute("piece-color") === "white"
    ? (piece.style.color = `${defaultWhitePieceColor}`)
    : (piece.style.color = `${defaultBlackPieceColor}`);
}

function pieceColorSelector(color) {
  let pieces = document.querySelectorAll(`.${color}Piece`);
  // console.log(pieces);
  pieces.forEach((selectedPiece) => {
    selectedPiece.addEventListener("click", () => {
      pieces.forEach((selectedPiece) =>
        selectedPiece.classList.remove("selectedPiece")
      );

      //when piece selected get info
      selectedPiece.classList.add("selectedPiece");
    });
  });
}

// function movePiece() {
//   let tiles = document.querySelectorAll(".tiles");

//   tiles.forEach((tile) => {
//     tile.addEventListener("click", () => {
//       let tilePiece = tile.querySelector("img");
//       let tilePositionX = tile.getAttribute("position-x");
//       let tilePositionY = tile.getAttribute("position-y");
//       console.log(`${tilePositionX}:${tilePositionY}`);

//       console.log(tilePiece);

//       // if (tile.querySelector("img") === null) {
//       //   tilePiece.remove();
//       // }
//     });
//   });
// }
