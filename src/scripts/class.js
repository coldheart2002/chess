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

  // getPieceType() {
  //   console.log(this.pieceType);
  // }

  moveValidator() {
    if (this.pieceType === "pawn") {
      console.log("move pawn");
      this.movePawn();
    } else if (this.pieceType === "king") {
      console.log("move king");
      // this.moveKing();
      this.movePawn();
    } else if (this.pieceType === "queen") {
      console.log("move queen");
      // this.moveQueen();
      this.movePawn();
    } else if (this.pieceType === "rook") {
      console.log("move rook");
      // this.moveRook();
      this.movePawn();
    } else if (this.pieceType === "bishop") {
      console.log("move bishop");
      // this.moveBishop();
      this.movePawn();
    } else if (this.pieceType === "knight") {
      console.log("move knight");
      // this.moveKnight();
      this.movePawn();
    }
  }

  movePawn() {
    let tiles = document.querySelectorAll(".tiles");
    let pawn = this.tile.querySelector("i");

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

  // moveKing() {
  //   console.log("move king");
  // }

  // moveQueen() {
  //   console.log("move queen");
  // }

  // moveRook() {
  //   console.log("move rook");
  // }

  // moveBishop() {
  //   console.log("move bishop");
  // }

  // moveKnight() {
  //   console.log("move knight");
  // }
}
