//TODO: al click del bottone "lightSwitch" la lampadina dovrà "accendersi"
//! BONUS
//TODO: il pulsante, una volta premuto, cambierà in "spegni", riportando l'immagine originale
//* deve funzionare in loop [un toggle?]
//* string.includes() potrebbe essere necessario [LO È]

//prima seleziono il bottone
const lightSwitchBtnEl = document.getElementById("lightSwitch"); // salvo il DOM node

// seleziono l'immagine
const imgEl = document.getElementById("lightBulb"); // salvo il DOM node

//* collego al bottone il cambio di immagine della lampadina
// applico l'event listener al bottone
lightSwitchBtnEl.addEventListener("click", function () {
  //* visualizzo in console il click del bottone
  // stampo in console il click
  console.log("Hai cliccato");
  // una volta constatato il suo funzionamento, aggiungo l'event per cambiare l'immagine
  // imposto le condizioni per cambiare l'immagine da white_lamp a yellow_lamp
  if (imgEl.src.includes("white_lamp.png")) {
    imgEl.src = "./assets/img/yellow_lamp.png";
    // imposto la condizione per cambiare il testo del bottone
    lightSwitchBtnEl.textContent = "Spegni";
    // imposto la condizioni per cambiare l'immagine da yellow_lamp a white_lamp
  } else if (imgEl.src.includes("yellow_lamp.png")) {
    imgEl.src = "./assets/img/white_lamp.png";
    // imposto la condizione per cambiare il testo del bottone
    lightSwitchBtnEl.textContent = "Accendi";
  }
});
