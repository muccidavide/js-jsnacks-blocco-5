/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zucchine = [
    {
        varieta: "chiara",
        peso: 1,
        lunghezza: 11
    },
    {
        varieta: "scura",
        peso: 1.2,
        lunghezza: 22
    },
    {
        varieta: "gialla",
        peso: 0.5,
        lunghezza: 20
    },
    {
        varieta: "rosa",
        peso: 1.5,
        lunghezza: 10
    },
    {
        varieta: "molle",
        peso: 1.2,
        lunghezza: 15
    },
    {
        varieta: "rossa",
        peso: 1,
        lunghezza: 11,
    },
    {
        varieta: "viola",
        peso: 1.2,
        lunghezza: 22,
    },
    {
        varieta: "lunga",
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varieta: "baby",
        peso: 1.5,
        lunghezza: 12,
    },
    {
        varieta: "jedi",
        peso: 1.6,
        lunghezza: 18,
    }
]

// somma peso zucchine
let somma = 0;
zucchine.forEach((zucchina)=>{
    let peso = zucchina.peso

    somma += peso
    
})

console.log(somma);
