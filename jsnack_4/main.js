/* 
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 */

let array1 = [1,2,3]
let array2 = ["a","b","c"]

function join(array1,array2) {
    let joinArray = []
    for (let i = 0; i < array1.length; i++) {
        const element1 = array1[i];
        const element2 = array2[i];
    
        joinArray.push(element1)
        joinArray.push(element2)  
    }
    return joinArray
}

console.log(join(array1,array2));

function join2(array1,array2) {
    let joinArray2 = []
    array1.forEach((element,i)=>{
        const element2 = array2[i];
    
        joinArray2.push(element)
        joinArray2.push(element2)  

})
    return joinArray2;
}

console.log(join2(array1,array2));

