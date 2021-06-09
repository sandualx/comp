let inp=prompt("Ingrese una cadena de caracteres:");
let arreglo=inp.split("");
function esunaletra(dig) {
    return (/[a-zA-Z]/).test(arreglo[dig])
}
let j=0;
for (let index = 1; index < arreglo.length; index++) {
    if (isNaN(arreglo[index])===false) {
        j++;
    }
    else{
        break;
    }
}
let k=j+3;
while (arreglo[k]==='*') {
    if (arreglo[k]==="*") {
        k++;
    } else {
        break;
    }
}
let condicion=false;
for (let index = k; index <= arreglo.length-2; index++) {
    if (arreglo[k]==="*") {
        condicion=false;
    } else {
        condicion=true;
    }
    
}

console.log(arreglo);
if (esunaletra(0)===true && arreglo[j+1]==='$' && esunaletra(j+2)===true && condicion==false && (arreglo[arreglo.length-1]>=0 || arreglo[arreglo.length-1]<=9)) {
    console.log("La cadena es correcta");
}
else{
    console.log("La cadena es incorrecta");
}
