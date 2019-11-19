const cards = document.querySelectorAll(".recipe-card .image");

for (let card of cards) {
  card.addEventListener("click", alert("click"));
}
