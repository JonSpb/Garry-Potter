export let input = document.querySelector("#name");
import {select} from "./filterName.js";
import {filterHeroes} from "./filterHeroes.js";
import {filterName} from "./filterName.js";

input.value = localStorage.getItem("input");
input.addEventListener("input", () => {
 let searchName = input.value.toLowerCase();
    localStorage.setItem("input", searchName);
    filterHeroes(filterName(select.value, searchName));
  });
  