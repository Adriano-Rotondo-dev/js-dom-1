//TODO: al click del bottone "lightSwitch" la lampadina dovrà "accendersi"
//* visualizzo in console il click del bottone
//prima seleziono il bottone
const lightSwitchBtnEl = document.getElementById('lightSwitch') // salva il DOM node

// applico l'event listener al bottone 
lightSwitchBtnEl.addEventListener('click', function () {
    // stampo in console il click
    console.log("Hai cliccato")
})


//* collego al bottone il cambio di immagine della lampadina


//! BONUS
//TODO: il pulsante, una volta premuto, cambierà in "spegni", riportando l'immagine originale
//* deve funzionare in loop
//* string.includes() potrebbe essere necessario
//? cambio anche il colore del body con l'accensione?