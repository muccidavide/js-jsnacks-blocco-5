/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

let parola = "ciao"

/**
 * 
 * @param {string} parola 
 * @returns {string}
 */

function reverseWord(parola) {
    return Array.from(parola).reverse().join('')
    
}

console.log(reverseWord(parola));