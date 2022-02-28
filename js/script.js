/* 1) creo una variabile con all interno una lista di e-mail.
2) attraverso un input vado a chiedere l'e-mail all'utente.
3) prendo l'e-mail che l'utente ha inserito e controllo se è presente all' interno della lista.
4) se è presente stampo un certo messaggio.
5) se non è presente ne stampo un altro.*/

//! Ho creato una variabile con all'interno una lista indicizzata di elementi 
const mailList = ["giovanni@gmail.com", "luca@libero.it", "alberto@gmail.com", "valentina@outlook.com", "francesca@libero.it", "giuliocoppola@gmail.com"];
console.log(mailList);


//TODO creato un bottone tramite javascript
let newButton = document.createElement("button");
//TODO aggiunte le classi
newButton.classList.add("btn", "btn-warning", "btn-lg");
//TODO aggiunto il testo all'suo interno
newButton.innerHTML = "Accedi"
//TODO aggiunto il bottone nel HTML alla fine del main
document.querySelector("#command").append(newButton);
//TODO aggiunta la classe text-center al parent del bottone
newButton.parentElement.classList.add("text-center");

const inputLabel = document.querySelector("label");
inputLabel.classList.add("mb-3", "fst-italic");

let newMessage = document.querySelector("p");
newMessage.classList.add("fs-3", "fw-bold", "text-white");


//! aggiungo un eventlistner al button per far si che dopo che l'utente inserisce la sua e-mail nell'input,
//! e clicca il bottone accedi il ciclo FOR scorra la lista
newButton.addEventListener("click", function() {

    //! variabile che prende il valore del input con id = user-mail
    let userMail = document.getElementById("user-mail").value;
    // console.log(userMail);
    
    //! inizializzo un ciclo for che farà scorrere la lista di e-mail dall'inizio alla fine
    for (let i = 0; i < mailList.length; i = i + 1) {
    console.log(mailList[i]);

    //! tramite questa condizione verifico che la mail dell'utente sia presente o no nella lista
    if (userMail == mailList[i]) {
        newMessage.innerHTML = "Welcome Back!"
        //! se la e-mail è presente all'interno della lista allora "break" interrompe il ciclo e viene stampato 
        //! il messaggio sulla pagina 
        break
        //! se l'e-mail non è presente nella lista viene stampato il secondo messaggio
    } else {
        newMessage.innerHTML = "Your credentials are invalid!"
    }

}

})










