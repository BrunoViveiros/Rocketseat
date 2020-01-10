const btnIngredient = document.querySelector("a[data-ref='ingredients']");
const btnPreparation = document.querySelector("a[data-ref='preparation']");

btnIngredient.addEventListener("click", handleClick);
btnPreparation.addEventListener("click", handleClick);

function handleClick(e) {
  const itemKey = e.target.dataset.ref;
  const items = document.querySelectorAll(`input[name="${itemKey}"]`);
  const lastItem = items[items.length - 1];
  const newInput = `<input name="${itemKey}" class="input -alt" type="text">`;

  lastItem.insertAdjacentHTML("afterend", newInput);
}
