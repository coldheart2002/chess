class ChessPiece {
  constructor(piece, tile) {
    this.piece = piece;
    this.tile = tile;
    this.pieceDetails = {
      pieceType: piece.getAttribute("piece-type"),
      pieceColor: piece.getAttribute("piece-color"),
    };
    this.position = {
      x: tile.getAttribute("position-x"),
      y: tile.getAttribute("position-y"),
    };

    console.log(`${this.pieceDetails.pieceType} object created`);
  }

  isEnemyKingCheck() {}
  getPosition() {
    return `${this.position.x}${this.position.y}`;
  }

  getPieceDetail() {
    return `${this.pieceDetails.pieceColor}-${
      this.pieceDetails.pieceType
    }.position = ${this.getPosition()}`;
  }

  move() {
    console.log('"move"');
    this.movePawn();
  }

  movePawn() {
    let tiles = document.querySelectorAll(".tiles");
    let pawn = this.piece;
    let isAppended = false; // flag to check if pawn is appended

    for (let i = 0; i < tiles.length; i++) {
      tiles[i].addEventListener("click", () => {
        if (!isAppended) {
          // only append if pawn is not already appended
          if (pawn.parentNode !== null) {
            pawn.parentNode.removeChild(pawn);
          }

          tiles[i].appendChild(pawn);
          isAppended = true; // set flag to true after appending
        }
      });
    }
  }
}
