class ChessPiece {
  constructor(position, pieceDetails) {
    this.position = position;
    this.pieceDetails = pieceDetails;
  }

  isEnemyKingCheck() {}
  getPosition() {
    return `${this.letter}${this.number}`;
  }

  movePawn() {
    let tiles = document.querySelectorAll(".tiles");
    let pawn = this.tile.querySelector("i");

    for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener("click", () => {
        // Assuming 'pawn' is a DOM element representing your pawn
        // Remove the pawn from its current parent

        if (pawn.parentNode) {
          pawn.parentNode.removeChild(pawn);
        }

        // Append the pawn to the clicked tile
        pawn != "" ? tiles[i].appendChild(pawn) : null;
      });
    }
  }
}
