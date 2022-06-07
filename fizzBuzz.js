let body = document.getElementsByTagName("body")[0];
let divFizz = document.createElement("div");
body.appendChild(divFizz);

let listeNombres = document.createElement("ul");
divFizz.appendChild(listeNombres);
const nombreMax = 100;
//on fait une boucle for dans laquelle on appelle la fonction fizzbuzz

for (let index = 1; index <= nombreMax; index++) {
  let valeur = document.createElement("li");
  valeur.innerText = fizzBuzz(index);
  listeNombres.appendChild(valeur);
}
/**
 * Permet de retourner à coté d'un nombre 'fizz' si il est un multiple de 3, 'buzz' si il est un multiple de 5 et
'fizzbuzz' si il est un multiple de 3 et 5
 * @param {number} nombre 
 * @returns fizz, Buzz ou fizzBuzz
 */
function fizzBuzz(nombre) {
  if (nombre % 15 == 0) {
    return `${nombre}` + " fizzBuzz";
  } else if (nombre % 5 == 0) {
    return `${nombre}` + " Buzz";
  } else if (nombre % 3 == 0) {
    return `${nombre}` + " fizz";
  } else return `${nombre}`;
}
//Mise en forme du body de la page principale
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.overflow = "auto";
body.style.backgroundColor = "yellow";
body.style.justifyContent = "justify";

//Mise en forme de la div fizz
divFizz.style.width = "300px";
divFizz.style.height = "auto";
divFizz.style.backgroundColor = "brown";
divFizz.style.border = "1px solid black";
divFizz.style.borderRadius = "5px";
divFizz.style.textAlign = "left";
divFizz.style.margin = "10px";
divFizz.style.fontSize = "150%";
divFizz.style.position = "fixed,right";
