/*Identificar los elementos con DOM y con (document.getElementById)
Hacer la funcion para que al hace click se sume, despues se cambia el valor a 2 y a 3
*/

let botonElement = document.getElementById("botonClick");
let pElement = document.getElementById("areaContador");
let btnClear = document.getElementById('btnClear')

// De 1 en 1
let contador = 0;
botonElement.onclick = function () {
    //contador++;
    //De 2 en 2
    contador ++
    pElement.textContent = contador;
   
   
    if (contador > 10) {

        contador++
        //contador = contador + 1 
        pElement.textContent = contador;
    }

//De 3 en 3

    if (contador > 30) {

        contador ++
        pElement.textContent = contador;
    }
}

//Boton reset contador

btnClear.onclick= function(){
    pElement.textContent = 0
    contador = 0
}
