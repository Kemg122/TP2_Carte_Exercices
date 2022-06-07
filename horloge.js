let body = document.getElementsByTagName("body")[0];
let horloge = document.createElement("div");
body.appendChild(horloge);

function majHorloge() {
  // rafraîchissement en millisecondes
  let tempsRafraichissement = 1000;
  setTimeout("horlogeDigitale()", tempsRafraichissement);
}

function horlogeDigitale() {
  let date = new Date();
  let heures = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  if (heures < 10) {
    heures = "0" + heures;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  let time = heures + ":" + minutes + ":" + secondes;
  horloge.innerHTML = time;
  majHorloge();
}

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.overflow = "auto";
body.style.backgroundColor = "yellow";
body.style.justifyContent = "center";

//Mise en forme de l'horloge
horloge.style.display = "flex";
horloge.style.width = "300px";
horloge.style.height = "100px";
horloge.style.backgroundColor = "green";
horloge.style.border = "1px solid black";
horloge.style.borderRadius = "5px";
horloge.style.textAlign = "center";
horloge.style.margin = "10px";
horloge.style.flexDirection = "column";
horloge.style.alignItems = "center";
horloge.style.overflow = "auto";
horloge.style.fontSize = "50px";
horloge.style.justifyContent = "center";
horlogeDigitale();
