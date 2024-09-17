const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrows, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrows.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - clickCounter - ratio + 1 >= 0) {
      console.log("itemNumber", itemNumber);
      console.log("clickCounter", clickCounter);
      console.log("ratio", ratio);
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// TOGGLE
const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(
  ".container,.movie-list-item,.navbar-container,.sidebar,.left-menu-icon,.toggle,.profile-text,.toggle-ball,.menu-list-item"
);

const menuListItems = document.querySelectorAll(".menu-list-item");
menuListItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuListItems.forEach((item) => {
      item.classList.remove("activeClick");
    });
    item.classList.add("activeClick");
  });
});

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
