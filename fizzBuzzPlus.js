let body = document.getElementsByTagName("body")[0];
let divFizzbuzzPlus = document.createElement("div");
body.appendChild(divFizzbuzzPlus);
let divBoutonFizzBuzzPlus = document.createElement("button");
let afficheFizzBuzzPlus = document.createElement("div");
divFizzbuzzPlus.appendChild(divBoutonFizzBuzzPlus);
divFizzbuzzPlus.appendChild(afficheFizzBuzzPlus);

divBoutonFizzBuzzPlus.innerText = "FizzBuzz Plus";
let nombre = 0;
afficheFizzBuzzPlus.innerText = nombre;

divBoutonFizzBuzzPlus.addEventListener("click", (event) => {
  nombre = nombre + 1;
  afficheFizzBuzzPlus.innerText = fizzBuzz(nombre);
  event.preventDefault();
});

/**
* Permet de retourner à coté d'un nombre 'fizz' si il est un multiple de 3, 'buzz' si il est un multiple de 5 et
'fizzbuzz' si il est un multiple de 3 et 5
* @param { number } nombre
* @returns fizz, Buzz ou fizzBuzz
*/
function fizzBuzz(nombre) {
  if (nombre % 15 == 0) {
    return ` ${nombre} ` + " fizzBuzz";
  } else if (nombre % 5 == 0) {
    return ` ${nombre} ` + "Buzz";
  } else if (nombre % 3 == 0) {
    return ` ${nombre} ` + " fizz";
  } else return `${nombre} `;
}

//Mise en forme du corps de la page principale
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.overflow = "auto";
body.style.backgroundColor = "yellow";
body.style.justifyContent = "space-between";

// Mise en forme div principale
divFizzbuzzPlus.style.display = "flex";
divFizzbuzzPlus.style.flexDirection = "row";
divFizzbuzzPlus.style.alignItems = "center";
divFizzbuzzPlus.style.width = "100%";
divFizzbuzzPlus.style.height = "300px";
divFizzbuzzPlus.style.backgroundColor = "green";
divFizzbuzzPlus.style.border = "1px black solid";
divFizzbuzzPlus.style.borderRadius = "10px";
divFizzbuzzPlus.style.textAlign = "center";
divFizzbuzzPlus.style.margin = "10px";
divFizzbuzzPlus.style.fontSize = "100%";
divFizzbuzzPlus.style.justifyContent = "center";

//Mise en forme du bouton
divBoutonFizzBuzzPlus.style.display = "flex";
divBoutonFizzBuzzPlus.style.alignItems = "center";
divBoutonFizzBuzzPlus.style.width = "200px";
divBoutonFizzBuzzPlus.style.height = "75px";
divBoutonFizzBuzzPlus.style.backgroundColor = "brown";
divBoutonFizzBuzzPlus.style.border = "1px black solid";
divBoutonFizzBuzzPlus.style.borderRadius = "5px";
divBoutonFizzBuzzPlus.style.textAlign = "center";
divBoutonFizzBuzzPlus.style.fontSize = "150%";
divBoutonFizzBuzzPlus.style.justifyContent = "center";

//Mise en forme de l'affichage
afficheFizzBuzzPlus.style.display = "flex";
afficheFizzBuzzPlus.style.alignItems = "center";
afficheFizzBuzzPlus.style.width = "200px";
afficheFizzBuzzPlus.style.height = "75px";
afficheFizzBuzzPlus.style.backgroundColor = "white";
afficheFizzBuzzPlus.style.border = "1px black solid";
afficheFizzBuzzPlus.style.borderRadius = "5px";
afficheFizzBuzzPlus.style.textAlign = "center";
afficheFizzBuzzPlus.style.margin = "10px";
afficheFizzBuzzPlus.style.fontSize = "150%";
afficheFizzBuzzPlus.style.justifyContent = "center";