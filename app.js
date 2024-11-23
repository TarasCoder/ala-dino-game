let character = document.getElementById("character");
let block = document.getElementById("block");

document.addEventListener("keydown", (ev) => {
  if (character.classList == "jump") return;
  if (ev.code == "Space") {
    character.classList.add("jump");
  }
  setTimeout(() => character.classList.remove("jump"), 500);
  areConnected();
});

setInterval(areConnected, 10);

function areConnected() {
  let characterPosition = window.getComputedStyle(character);
  let characterPositionNumber = parseInt(characterPosition.bottom);

  let boxPosition = window.getComputedStyle(block);
  let boxPositionNumber = parseInt(boxPosition.left);

  if (
    boxPositionNumber < 50 &&
    boxPositionNumber > 30 &&
    characterPositionNumber <= 20
  ) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("game over!");
  }
}
