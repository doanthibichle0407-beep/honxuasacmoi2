const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter))
        card.style.display = "block";
      else
        card.style.display = "none";
    });
  });
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const closeModal = document.getElementById("closeModal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalImg.src = card.dataset.img;
    modalTitle.innerText = card.dataset.name;
    modal.classList.remove("hidden");
  });
});

closeModal.onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if(e.target===modal) modal.classList.add("hidden"); }
