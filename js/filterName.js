import {data} from "./data.js";
import {filterHeroes} from "./filterHeroes.js";
import {input} from "./input.js";
export let select = document.querySelector("#school");

select.value = localStorage.getItem("select");
select.addEventListener("input", () => {
  //обращаемся к тегу select, addEventListener - позволяет несколько раз обратиться к списку(несколько обработчиков на одно событие),
let school = select.value; // создаем переменную, с помощью которой мы выбираем школу, где учится персонаж
  localStorage.setItem("select", school);
  filterHeroes(filterName(school, input.value)); //- обращаемся к функции с именем filterHeroes, в которой заложен фильтр(по элементам) отбирающий элемент house при совпадении со значением переменной school
});

export function filterName(school, name) {
    if (select.value === "") {
      return data.filter(
        (el) => el.house === "" && el.name.toLowerCase().includes(name)
      );
    } else if (select.value === "All") {
      return data.filter((el) => el.name.toLowerCase().includes(name));
    }
    return data.filter(
      (el) => el.house.includes(school) && el.name.toLowerCase().includes(name)
    );
  }
