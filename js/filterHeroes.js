
let divBlok = document.querySelector(".container_image_form");
export function filterHeroes(data) {
    let allHeroes = data.reduce(function (prev, el) {
      return (
        prev +
        `<div class="card1" >
          <img src=${el.image}>
          <div class="card-text">
          <h5>${el.name}</h5>
          <p>
          actor: ${el.actor}<br> 
          species:${el.species}<br>
          house:${el.house}<br>
          wand core: ${el.wand.core}<br>
          alive:${el.alive ? "yes" : "no"}
          </p>
          </div>
          </div>`
      );
    }, "");
    divBlok.innerHTML = allHeroes;
  }