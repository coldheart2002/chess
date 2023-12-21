class ChessPiece {
  constructor(pieceType, color, number, letter, tile) {
    this.pieceType = pieceType;
    this.color = color;
    this.number = number;
    this.letter = letter;
    this.tile = tile;
  }
  isEnemyKingCheck() {}

  getPosition() {
    return `${this.letter}${this.number}`;
  }

  getPieceType() {
    console.log(this.pieceType);
  }

  moveValidator() {
    if (this.pieceType === "pawn") {
      this.movePawn();
    } else if (this.pieceType === "king") {
      this.moveKing();
    } else if (this.pieceType === "queen") {
      this.moveQueen();
    } else if (this.pieceType === "rook") {
      this.moveRook();
    } else if (this.pieceType === "bishop") {
      this.moveBishop();
    } else if (this.pieceType === "knight") {
      this.moveKnight();
    }
  }

  movePawn() {
    let tiles = document.querySelectorAll(".tiles");
    let pawn = this.tile.querySelector("img");
    if (pawn === "") {
      return;
    } else {
      for (let i = 1; i < tiles.length; i++) {
        tiles[i].addEventListener("click", () => {
          // Assuming 'pawn' is a DOM element representing your pawn
          // Remove the pawn from its current parent

          if (pawn.parentNode) {
            pawn.parentNode.removeChild(pawn);
          }

          // Append the pawn to the clicked tile
          tiles[i].appendChild(pawn);
          pawn = "";
        });
      }
    }
  }

  moveKing() {
    console.log("move king");
  }

  moveQueen() {
    console.log("move queen");
  }

  moveRook() {
    console.log("move rook");
  }

  moveBishop() {
    console.log("move bishop");
  }

  moveKnight() {
    console.log("move knight");
  }
}
