let body = document.getElementsByTagName("body")[0];
let tablePerso = document.createElement("div");
body.appendChild(tablePerso);
let listePoneys = document.createElement("ul");
tablePerso.appendChild(listePoneys);

// En passantpar une liste
// let perso1 = document.createElement("li");
// let perso2 = document.createElement("li");
// let perso3 = document.createElement("li");
// let perso4 = document.createElement("li");
// let perso5 = document.createElement("li");
// let perso6 = document.createElement("li");

// divPerso1.appendChild(perso1);
// divPerso2.appendChild(perso2);
// divPerso3.appendChild(perso3);
// divPerso4.appendChild(perso4);
// divPerso5.appendChild(perso5);
// divPerso6.appendChild(perso6);

let divPerso1 = document.createElement("div");
let divPerso2 = document.createElement("div");
let divPerso3 = document.createElement("div");
let divPerso4 = document.createElement("div");
let divPerso5 = document.createElement("div");
let divPerso6 = document.createElement("div");

listePoneys.appendChild(divPerso1);
listePoneys.appendChild(divPerso2);
listePoneys.appendChild(divPerso3);
listePoneys.appendChild(divPerso4);
listePoneys.appendChild(divPerso5);
listePoneys.appendChild(divPerso6);



divPerso1.innerText = "Twilight Sparkle";
divPerso2.innerText = "Applejack";
divPerso3.innerText = "Fluttershy";
divPerso4.innerText = "Rarity";
divPerso5.innerText = "Pinkie Pie";
divPerso6.innerText = "Rainbow Dash";

//Mise en forme du body de la page principale
body.style.display = "flex";
body.style.flexDirection = "row";
body.style.alignItems = "center";
body.style.overflow = "auto";
body.style.backgroundColor = "yellow";
body.style.justifyContent = "center";

//une liste de poneys
listePoneys.style.display = "flex";
listePoneys.style.flexDirection = "row";
listePoneys.style.width = "100%";
listePoneys.style.height = "100%";
listePoneys.style.alignItems = "center";
listePoneys.style.overflow = "auto";
listePoneys.style.justifyContent = "space-between";

//Personnages
divPerso1.style.width = "150px";
divPerso1.style.height = "auto";
divPerso1.style.backgroundColor = "brown";
divPerso1.style.border = "1px black solid";
divPerso1.style.borderRadius = "5px";
divPerso1.style.textAlign = "center";
divPerso1.style.fontSize = "150%";
divPerso1.style.justifyContent = "center";

divPerso2.style.width = "150px";
divPerso2.style.height = "auto";
divPerso2.style.backgroundColor = "brown";
divPerso2.style.border = "1px black solid";
divPerso2.style.borderRadius = "5px";
divPerso2.style.textAlign = "center";
divPerso2.style.fontSize = "150%";
divPerso2.style.justifyContent = "center";

divPerso3.style.width = "150px";
divPerso3.style.height = "auto";
divPerso3.style.backgroundColor = "brown";
divPerso3.style.border = "1px black solid";
divPerso3.style.borderRadius = "5px";
divPerso3.style.textAlign = "center";
divPerso3.style.fontSize = "150%";
divPerso3.style.justifyContent = "center";

divPerso4.style.width = "150px";
divPerso4.style.height = "auto";
divPerso4.style.backgroundColor = "brown";
divPerso4.style.border = "1px black solid";
divPerso4.style.borderRadius = "5px";
divPerso4.style.textAlign = "center";
divPerso4.style.fontSize = "150%";
divPerso4.style.justifyContent = "center";

divPerso5.style.width = "150px";
divPerso5.style.height = "auto";
divPerso5.style.backgroundColor = "brown";
divPerso5.style.border = "1px black solid";
divPerso5.style.borderRadius = "5px";
divPerso5.style.textAlign = "center";
divPerso5.style.fontSize = "150%";
divPerso5.style.justifyContent = "center";

divPerso6.style.width = "150px";
divPerso6.style.height = "auto";
divPerso6.style.backgroundColor = "brown";
divPerso6.style.border = "1px black solid";
divPerso6.style.borderRadius = "5px";
divPerso6.style.textAlign = "center";
divPerso6.style.fontSize = "150%";
divPerso6.style.justifyContent = "center";