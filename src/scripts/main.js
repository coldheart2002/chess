//check if online
window.addEventListener("load", function () {
  function updateOnlineStatus(event) {
    if (!navigator.onLine) {
      alert("You are offline");
    }
  }

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});

let defaultBlackPieceColor = "black";
let defaultWhitePieceColor = "red";

//for display variables
let display = document.querySelector(".display");
let displayPieceSelected = document.getElementById("pieceSelected");
let displayPieceColor = document.getElementById("pieceColor");
let displayPiecePosition = document.getElementById("piecePosition");

// if (displayPieceSelected.innerText === "") {
//   display.style.display = "none";
// }

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

    //pawn generator
    if (number === 7 || number === 2) {
      let pieceType = "pawn";
      let color =
        number === 7 ? defaultBlackPieceColor : defaultWhitePieceColor;
      pieceGenerator(pieceType, color, number, letter, tile);
    }

    //rook generator
    if (number === 8 || number === 1) {
      let pieceType = "rook";
      let color =
        number === 8 ? defaultBlackPieceColor : defaultWhitePieceColor;

      if (letter === "A" || letter === "H") {
        pieceGenerator(pieceType, color, number, letter, tile);
      }
    }

    //knight generator
    if (number === 8 || number === 1) {
      let pieceType = "knight";
      let color =
        number === 8 ? defaultBlackPieceColor : defaultWhitePieceColor;

      if (letter === "B" || letter === "G") {
        pieceGenerator(pieceType, color, number, letter, tile);
      }
    }

    //bishop generator
    if (number === 8 || number === 1) {
      let pieceType = "bishop";
      let color =
        number === 8 ? defaultBlackPieceColor : defaultWhitePieceColor;

      if (letter === "C" || letter === "F") {
        pieceGenerator(pieceType, color, number, letter, tile);
      }
    }

    //queen generator
    if (number === 8 || number === 1) {
      let pieceType = "queen";
      let color =
        number === 8 ? defaultBlackPieceColor : defaultWhitePieceColor;

      if (letter === "D") {
        pieceGenerator(pieceType, color, number, letter, tile);
      }
    }

    //king generator
    if (number === 8 || number === 1) {
      let pieceType = "king";
      let color =
        number === 8 ? defaultBlackPieceColor : defaultWhitePieceColor;

      if (letter === "E") {
        pieceGenerator(pieceType, color, number, letter, tile);
      }
    }
  });
});

// default tile color
let defaultTileColor = {
  light: "lightgray",
  dark: "darkgray",
};

//all tiles click listener
let tiles = document.querySelectorAll(".tiles");

let chessPiece;

tiles.forEach((tile) => {
  let tilePositionX = tile.getAttribute("position-x");
  let tilePositionY = tile.getAttribute("position-y");
  let position = `${tilePositionX}${tilePositionY}`;
  let piece = tile.querySelector("i");

  //click listener for each tiles
  tile.addEventListener("click", () => {
    //if there is a piece
    if (piece !== null) {
      //create object
      chessPiece = new ChessPiece(piece, tile);

      chessPiece.move();
      // let newTile = tiles;
      // newTile.forEach((tile) => {
      //   tile.addEventListener("click", () => {
      //     console.log(tile);
      //     console.log(
      //       tile.querySelector("i").classList.remove("selectedPiece")
      //     );
      //   });
      // });
    } else {
      console.log(`tile.position = ${position}`);
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
pieceColorSelector(defaultBlackPieceColor);
pieceColorSelector(defaultWhitePieceColor);
