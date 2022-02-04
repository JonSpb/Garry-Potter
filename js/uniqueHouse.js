import {data} from "./data.js";

let unique = document.querySelector("#school");
let allHouse = data.map((elem) => elem.house);
console.log(allHouse);
export let uniqueHouse = Array.from(new Set(allHouse));
console.log(uniqueHouse);

export function uniqueHouseAll(uniqueHouse) {
    let a = uniqueHouse.reduce(function (prom, el) {
      return (
        prom +
        `
        <option value='${el}'> ${el}</option>`
      );
    }, "<option>All</option>");
    unique.innerHTML = a;
  }

