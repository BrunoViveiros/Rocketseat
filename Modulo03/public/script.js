const cards = document.querySelectorAll(".recipe-card .image");

for (let card of cards) {
  card.addEventListener("click", e => {
    const recipeIndex = e.path[1].getAttribute("data-index");
    window.location.href = `/recipe/${recipeIndex}`;
  });
}
