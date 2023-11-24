const scrollBlock = document.querySelector(".images");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

scrollBlock.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollBlock.scrollLeft += evt.deltaY;
  scrollBlock.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollBlock.style.scrollBehavior = "smooth";
  scrollBlock.scrollLeft += 1100;
});
backBtn.addEventListener("click", () => {
  scrollBlock.style.scrollBehavior = "smooth";
  scrollBlock.scrollLeft -= 1100;
});
