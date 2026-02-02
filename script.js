const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClicked() {
  document.getElementById("response").innerHTML =
    "YAYYY 💕<br>You just made me the happiest person ❤️";
}
