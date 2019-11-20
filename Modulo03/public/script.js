const cards = document.querySelectorAll(".recipe-card .image");
const buttons = document.querySelectorAll(".recipe-page .button");

for (let card of cards) {
  card.addEventListener("click", e => {
    const recipeIndex = e.path[1].getAttribute("data-index");
    window.location.href = `/recipe/${recipeIndex}`;
  });
}

for (let button of buttons) {
  button.addEventListener("click", e => {
    let status = e.path[2].classList;
    if (status.contains("-active")) {
      status.remove("-active");
      e.path[0].innerText = "Mostrar";
    } else {
      status.add("-active");
      e.path[0].innerText = "Esconder";
    }
  });
}
