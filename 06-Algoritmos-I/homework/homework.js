"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //Incluir el numero 1 pq todos los numeros son divisibles para 1
  //Se comienza a divir para 2
  //Si el resultado no es entero avanzo 1++
  //Return un array de todos los factores

  var factores = [1];
  var divisor = 2;

  while (num !== 1) {
    if (num % divisor === 0) {
      //obtenemos enteros
      factores.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factores;

  ///////////////////////////
}

console.log(factorear(22));

console.log(bubbleSort([1, 4, 2, 5]));
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var change = true;

  var aux;
  while (change) {
    change = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        change = true;
      }
    }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 5]));
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    //asumimos que el primero ya esta ordenado
    var x = i - 1; //Primero
    var aux = array[i]; //Segundo
    while (x >= 0 && array[x] < aux) {
      array[x + 1] = array[x];
      x--;
    }
    array[x + 1] = aux;
  }
  return array;
}

console.log(selectionSort([1, 4, 2, 5]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
