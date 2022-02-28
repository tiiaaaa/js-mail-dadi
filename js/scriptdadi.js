// genero un numero randomico da 1 a 6 inclusi.
const playerNumber = Math.floor(Math.random() * 6) + 1; //! + 1 significa che parte a contare da 1, non da 0, fino a 6 
document.querySelector("#user-number").innerHTML = 'Il tuo valore è '+playerNumber;

// genero un numero randomico da 1 a 6 inclusi.
const aINumber = Math.floor(Math.random() * 6) + 1; //! + 1 significa che parte a contare da 1, non da 0, fino a 6 
document.querySelector("#ai-number").innerHTML = 'Il valore del computer è '+aINumber;

// verifico le varie condizioni
if ( playerNumber > aINumber){ 
    document.getElementById("result").innerHTML = 'Hai vinto!';
} else if ( aINumber > playerNumber){
    document.getElementById("result").innerHTML = 'Ha vinto l\'AI!';
} else {
    document.getElementById("result").innerHTML = 'Siamo pari!';
}
