class ChessPiece {
  constructor(pieceType, color, number, letter) {
    this.pieceType = pieceType;
    this.color = color;
    this.number = number;
    this.letter = letter;
  }
  isEnemyKingCheck() {}

  getPosition() {
    console.log(
      `currentPosition.${this.color}-${this.pieceType} = ${this.number}${this.letter}`
    );
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
    console.log("move pawn");
    console.log(this.number);
    test();
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
