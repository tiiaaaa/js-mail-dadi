/* 1) creo una variabile con all interno una lista di e-mail.
2) attraverso un input vado a chiedere l'e-mail all'utente.
3) prendo l'e-mail che l'utente ha inserito e controllo se è presente all' interno della lista.
4) se è presente stampo un certo messaggio.
5) se non è presente ne stampo un altro.*/

//! Ho creato una variabile con all'interno una lista indicizzata di elementi 
const mailList = ["giovanni@gmail.com", "luca@libero.it", "alberto@gmail.com", "valentina@outlook.com", "francesca@libero.it"];
console.log(mailList);

//! variabile che prende il valore del input con id = user-mail
let userMail = document.getElementById("user-mail").value;
console.log(userMail);

//TODO creato un bottone tramite javascript
let newButton = document.createElement("button");
//TODO aggiunte le classi
newButton.classList.add("btn", "btn-primary");
//TODO aggiunto il testo all'suo interno
newButton.innerHTML = "Accedi"
//TODO aggiunto il bottone nel HTML alla fine del main
document.querySelector("#command").append(newButton);
//TODO aggiunta la classe text-center al parent del bottone
newButton.parentElement.classList.add("text-center");


newButton.addEventListener("click", function() {
    //! inizializzo un ciclo for che farà scorrere la lista di e-mail dall'inizio alla fine
    for (let i = 0; i < mailList.length; i = i + 1) {
    console.log(mailList[i]);

    if (userMail == i) {
        console.log("Welcome");
    } else if (userMail != i) {
        console.log("Your credentials are invalid");
    }
}

})







