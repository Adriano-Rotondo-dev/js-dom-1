//TODO: al click del bottone "lightSwitch" la lampadina dovrà "accendersi"
//! BONUS
//TODO: il pulsante, una volta premuto, cambierà in "spegni", riportando l'immagine originale
//* deve funzionare in loop [un toggle?]
//* string.includes() potrebbe essere necessario [LO È]

//* visualizzo in console il click del bottone
//prima seleziono il bottone
const lightSwitchBtnEl = document.getElementById("lightSwitch"); // salvo il DOM node

// seleziono l'immagine
const imgEl = document.getElementById("lightBulb"); // salvo il DOM node

// seleziono il body per il cambio di background color
const bgEl = document.getElementById("pageBody");

//* collego al bottone il cambio di immagine della lampadina
// applico l'event listener al bottone
lightSwitchBtnEl.addEventListener("click", function () {
  // stampo in console il click
  console.log("Hai cliccato");
  // una volta constatato il suo funzionamento, aggiungo l'event per cambiare l'immagine
  if (imgEl.src.includes("white_lamp.png")) {
    imgEl.src = "./assets/img/yellow_lamp.png";
    lightSwitchBtnEl.textContent = "Spegni";
  } else if (imgEl.src.includes("yellow_lamp.png")) {
    imgEl.src = "./assets/img/white_lamp.png";
    lightSwitchBtnEl.textContent = "Accendi";
  }
});
