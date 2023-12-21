function pieceGenerator(pieceType, pieceColor, number, letter, tile) {
  let piece = document.createElement("img");
  piece.setAttribute("class", pieceType);
  piece.setAttribute("src", `./src/chessPieces/${pieceColor}/${pieceType}.png`);
  piece.setAttribute("piece-color", `${pieceColor}`);
  piece.setAttribute("piece-type", `${pieceType}`);
  tile.append(piece);
}

function pieceColorSelector(color) {
  let pieces = document.querySelectorAll(`.${color}Piece`);
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
