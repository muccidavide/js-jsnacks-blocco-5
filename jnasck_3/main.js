/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

let parola = "ciao"

function reverseWord(parola) {
    let newArray = Array.from(parola)
    reverseArray = newArray.reverse();
    let word = newArray.join('')
    return word
    
}

console.log(reverseWord(parola));