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




