import { buttonsData, menu } from "./dp.js";
import { elements, calculatePrice } from "./helpers.js";

const searchCategory = (e) => {
  const category = e.target.dataset.category;

  const filtredMenu = menu.filter((item) => item.category === category);

  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filtredMenu);
  }
  renderButtons(category);
};

const renderMenuItems = (menuItems) => {
  let menuHtml = menuItems.map(
    (item) => `
    <a
        id="card"
        class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2"
        href="./productDetail.html?id=${item.id}&category=${
      item.category
    }&price=${calculatePrice(item.price)}"
      >
        <img src="${item.img}" alt="" class="rounded shadow" />
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <h5>${item.title}</h5>
            <p class="text-success">${calculatePrice(item.price)} ₺</p>
          </div>
          <p class="lead">
          ${item.desc}
          </p>
        </div>
    </a>`
  );
  menuHtml = menuHtml.join("");

  elements.menuArea.innerHTML = menuHtml;
};

const renderButtons = (active) => {
  elements.buttonsArea.innerHTML = "";

  buttonsData.forEach((btn) => {
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn btn-outline-dark filter-btn";

    buttonEle.textContent = btn.text;

    buttonEle.dataset.category = btn.value;

    if (btn.value === active) {
      buttonEle.classList.add("bg-dark", "text-light");
    }

    elements.buttonsArea.appendChild(buttonEle);
  });
};

//olay izleyicileri

// document.addEventListener("DOMContentLoaded", renderMenuItems(menu));
// document.addEventListener("DOMContentLoaded", renderButtons())
document.addEventListener("DOMContentLoaded", () => {
  renderMenuItems(menu);
  renderButtons("all");
});

elements.buttonsArea.addEventListener("click", searchCategory);
