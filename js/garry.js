import {uniqueHouseAll} from "./uniqueHouse.js";
import {filterHeroes} from "./filterHeroes.js";
import {filterName} from "./filterName.js";
import {uniqueHouse} from "./uniqueHouse.js";
import {select} from "./filterName.js";
import {input} from "./input.js";

uniqueHouseAll(uniqueHouse);
select.value = localStorage.getItem("select");

filterHeroes(filterName(select.value, input.value));


