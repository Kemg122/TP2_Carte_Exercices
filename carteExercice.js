let body = document.getElementsByTagName('body')[0];
let titreMenu = document.createElement('h1');
titreMenu.textContent = 'Menu Principal'
body.appendChild(titreMenu);


//on crée une première div
let carte = document.createElement('div');
//on met ajoute au body
body.appendChild(carte);

let exo1Menu = document.createElement('div');
let exo2Menu = document.createElement('div');
let exo3Menu = document.createElement('div');
let exo4Menu = document.createElement('div');

//on ajoute les cases avec les exo à la carte
carte.appendChild(exo1Menu);
carte.appendChild(exo2Menu);
carte.appendChild(exo3Menu);
carte.appendChild(exo4Menu);
//On crée une div bouton et une texte por chaque exo
let exo1Enonce = document.createElement('div');
let exo2Enonce = document.createElement('div');
let exo3Enonce = document.createElement('div');
let exo4Enonce = document.createElement('div');
let boutonExo1Menu = document.createElement('div');
let boutonExo2Menu = document.createElement('div');
let boutonExo3Menu = document.createElement('div');
let boutonExo4Menu = document.createElement('div');
//on ajoute des boutons etles énoncés àla fin de chaque exercice
exo1Menu.appendChild(boutonExo1Menu);
exo2Menu.appendChild(boutonExo2Menu);
exo3Menu.appendChild(boutonExo3Menu);
exo4Menu.appendChild(boutonExo4Menu);
exo1Menu.appendChild(exo1Enonce);
exo2Menu.appendChild(exo2Enonce);
exo3Menu.appendChild(exo3Enonce);
exo4Menu.appendChild(exo4Enonce);

//Créer les boutons
boutonExo1Menu.innerHTML = `<button  type="button" class="btn btn-primary" onclick="window.location.href = '../page/listePerso.html'";>Liste</button>`;
boutonExo2Menu.innerHTML = `<button  type="button" class="btn btn-primary" onclick="window.location.href = '../page/horloge.html'";>Horloge</button>`;
boutonExo3Menu.innerHTML = `<button  type="button" class="btn btn-primary" onclick="window.location.href = '../page/fizzBuzz.html'";>FizzBuzz</button>`;
boutonExo4Menu.innerHTML = `<button  type="button" class="btn btn-primary" onclick="window.location.href = '../page/fizzBuzzPlus.html'";>FizzBuzz Plus</button>`;

//Mise en forme de l'exo 1
exo1Enonce.style.width = '300px';
exo1Enonce.style.height = 'auto';
exo1Enonce.style.backgroundColor = 'brown';
exo1Enonce.style.border = "1px solid black";
exo1Enonce.style.borderRadius = "5px";
exo1Enonce.style.textAlign = "left";
exo1Enonce.style.margin = "10px";
exo1Enonce.style.fontSize = "150%";
exo1Enonce.style.position = "fixed,right";
exo1Enonce.innerText = "Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'";

//Mise en forme de l'exo 2
exo2Enonce.style.width = '300px';
exo2Enonce.style.height = 'auto';
exo2Enonce.style.backgroundColor = 'brown';
exo2Enonce.style.border = "1px solid black";
exo2Enonce.style.borderRadius = "5px";
exo2Enonce.style.textAlign = "left";
exo2Enonce.style.margin = "10px";
exo2Enonce.style.fontSize = "150%";
exo2Enonce.style.position = "fixed,300px";
exo2Enonce.innerText = "Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes pour afficher l'heure actuelle.";

//Mise en forme de l'exo 3
exo3Enonce.style.width = '300px';
exo3Enonce.style.height = 'auto';
exo3Enonce.style.backgroundColor = 'brown';
exo3Enonce.style.border = "1px solid black";
exo3Enonce.style.borderRadius = "5px";
exo3Enonce.style.textAlign = "left";
exo3Enonce.style.justifyContent = "flex-start";
exo3Enonce.style.margin = "10px";
exo3Enonce.style.fontSize = "150%";
exo3Enonce.style.position = "fixed,left";
exo3Enonce.innerText = "Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 'fizzbuzz' si le nom est un multiple de 3 et 5. Vous utiliserez une fonction !";

//Mise en forme de l'exo 4
exo4Enonce.style.width = '300px';
exo4Enonce.style.height = 'auto';
exo4Enonce.style.backgroundColor = 'brown';
exo4Enonce.style.border = "1px solid black";
exo4Enonce.style.borderRadius = "5px";
exo4Enonce.style.textAlign = "left";
exo4Enonce.style.margin = "10px";
exo4Enonce.style.fontSize = "150%";
exo4Enonce.style.position = "fixed,300px";
exo4Enonce.innerText = "Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous utiliserez des boutons pour incrémenter et décrémenter le chiffre. Vous utiliserez une écoute d'événement pour les boutons !";

//Mise en forme du body de la page principale
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.overflow = "auto";
body.style.backgroundColor = 'yellow';
body.style.justifyContent = "space-between";

//Mise en forme de la carte de la page principale
carte.style.display = "flex";
carte.style.width = '100%';
carte.style.height = '100%';
carte.style.flexDirection = "row";
carte.style.alignItems = "center";
carte.style.backgroundColor = 'pink';
carte.style.justifyContent = "space-between";
carte.style.margin = "20px";
carte.style.flexWrap = "wrap";

//Mise en forme du  titre la carte de la page principale
titreMenu.style.display = "flex";
titreMenu.style.flexDirection = "row";
titreMenu.style.alignItems = "center";
titreMenu.style.width = '100%';
titreMenu.style.height = '100px';
titreMenu.style.backgroundColor = 'green';
titreMenu.style.border = "1px solid black";
titreMenu.style.borderRadius = "5px";
titreMenu.style.textAlign = "center";
titreMenu.style.margin = "10px";
titreMenu.style.fontSize = "150%";
titreMenu.style.justifyContent = "center";

//Mise en forme du exo1 de la page principale
exo1Menu.style.display = "flex";
exo1Menu.style.flexDirection = "column-reverse";
exo1Menu.style.alignItems = "center";
exo1Menu.style.border = "1px solid black";
exo1Menu.style.margin = "auto, 10px";
exo1Menu.style.borderRadius = "5px";

//Mise en forme du exo2 de la page principale
exo2Menu.style.display = "flex";
exo2Menu.style.flexDirection = "column-reverse";
exo2Menu.style.alignItems = "center";
exo2Menu.style.border = "1px solid black";
exo2Menu.style.margin = "auto, 10px";

//Mise en forme du exo3 de la page principale
exo3Menu.style.display = "flex";
exo3Menu.style.flexDirection = "column-reverse";
exo3Menu.style.alignItems = "center";
exo3Menu.style.border = "1px solid black";
exo3Menu.style.margin = "auto, 10px";

//Mise en forme du exo4 de la page principale
exo4Menu.style.display = "flex";
exo4Menu.style.flexDirection = "column-reverse";
exo4Menu.style.alignItems = "center";
exo4Menu.style.border = "1px solid black";
exo4Menu.style.margin = "auto, 10px";