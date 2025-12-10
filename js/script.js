/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */


//inserisco img e button in js 

const lamp = document.getElementById('lampoff');
const button = document.getElementById('buttOn');

//devo dire al mio js che quando clicco buttOn la lampadina si deve accendere e cambia anche scritta, lo faccio aggiungendo addEventListener e una definizione di funzione

button.addEventListener('click', function(){
    lamp.src = "./img/yellow_lamp.png";
    lamp.alt = "lampadina_accesa"     //Ho anche cambiato il nome dell'alt così da far risultare tutto il tag più chiaro
    button.textContent = "Spegni"
});
