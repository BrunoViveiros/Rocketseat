const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".recipe-card .image");

document.querySelector(".close").addEventListener("click", closeModal);

function openModal(e) {
  const modal = modalOverlay.querySelector(".modal");
  const card = e.path[1];

  modal.querySelector("img").src = card.querySelector("img").src;
  modal.querySelector("img").alt = card.querySelector("img").alt;
  modal.querySelector(".title").innerText = card.querySelector(
    ".title"
  ).innerText;
  modal.querySelector(".author").innerText = card.querySelector(
    ".author"
  ).innerText;

  modalOverlay.classList.add("-active");
}

function closeModal() {
  modalOverlay.classList.remove("-active");
}

for (let card of cards) {
  card.addEventListener("click", openModal);
}
