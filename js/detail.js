import { menu } from "./dp.js";
import { calculatePrice, elements } from "./helpers.js";

const search = window.location.search;

const searchParam = new URLSearchParams(search);

const paramId = searchParam.get("id");

const product = menu.find((item) => item.id === Number(paramId));

elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="./index.html">
          <i class="bi bi-house fs-2"></i>
        </a>
    <div>ANASAYFA / ${product.category.toUpperCase()} / ${product.title.toUpperCase()}</div>
    </div>
    <h1 class="text-center shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex justify-content-center align-items-center">
        <img src="${product.img}" alt="" style="max-width: 480px" />
    </div>
    <div>
        <h3 class="my-5">
          Ürünün Kategorisi: <span class="text-success">${product.category.toLocaleUpperCase()}</span>
        </h3>
        <h3>Ürünün Fiyatı: <span class="text-success">${calculatePrice(
          product.price
        )} ₺</span> </h3> 
    </div>
    <p class="lead fs-3">
        ${product.desc}
    </p>


`;
