// Hacer una lista
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

li1.innerText = "said";
li2.innerText = "mariano";

function hide(evt) {
  // evt.target se refiere al elemento <li> en el que se hizo clic
  // Esto es diferente a evt.currentTarget, que se referiría al padre <ul> en este contexto
  evt.target.style.visibility = "hidden";
  console.log(evt);
}

function agregar() {
  //event.target
  li2.innerText = "mariano2";
}

// Adjuntar el oyente a la lista
// Se activará cuando se haga clic en cada <li>
// li1.addEventListener('click', hide);
function hola(e) {
  const buscado = e.target;

  if (buscado == li1) {
    console.log("Hola mundo");
  }
}

// li1.addEventListener("click", hola);


// function clickHandler(e) {
//   var elem,
//     evt = e ? e : evento;
//   if (evt.target) elemento = evt.target;
//   else if (evt.objetivo) elem = evt.objetivo;

//   alert(
//     "" +
//       "Hiciste clic en el siguiente elemento HTML: \n <" +
//       //  +elem.tangName.toUpperCase()
//       ">"
//   );
//   return true;
// }

// document.onclick = clickHandler;

const API = "https://fakestoreapi.com/products";

const container = null || document.getElementById("containerDiv");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json(JSON.parse);
  return data;
}

(async () => {
  try {
    const infos = await fetchData(API);
    let view = `
        ${infos
          .map(
            (info) => `
        <div class="product-card">
          <img src="${info.image}" alt="" onClick="">
          
          <div class="product-info">
            <div>
              <p>${info.price}</p>
              <p>${info.title}</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
        </div>
        `
          )
          .join("")}

        `;
    container.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
