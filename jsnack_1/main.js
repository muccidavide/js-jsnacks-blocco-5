/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

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
        peso: 0.6,
        lunghezza: 18,
    }
]

let zucchineCorte = zucchine.filter((zucchina) => zucchina.lunghezza < 15)
let zucchineLunghe = zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(zucchineCorte);

let sommaCorte = 0, sommaLunghe = 0;
zucchineCorte.forEach(zucchina => {
    sommaCorte += zucchina.peso
    
});

zucchineLunghe.forEach(zucchina => {
    sommaLunghe += zucchina.peso
    
});

console.log(sommaCorte);
console.log(sommaLunghe);

