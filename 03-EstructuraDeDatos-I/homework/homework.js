'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n<0) throw new Error('No se puede acceder al factorial de una numero negativo')
  if(n<=1) return n;//Para cero
  return n * nFactorial(n-1);
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n<0) throw new Error('Solo puede ingresar numeros positivos')
  if(n<=1){
    return n
  }else{
    return nFibonacci(n-1) + nFibonacci(n-2)
  }
}
//Guarda en cache para reducir el procesamiento
function fibonacciOptimized(n, cache={}){
  if(cache[n]) return cache[n];
  if(n<0) throw new Error('Solo puede ingresar numeros positivos')
  if(n<=1){
    return n
  }else{
    cache[n] = fibonacciOptimized(n-1, cache) + fibonacciOptimized(n-2, cache)
    console.log(cache[n]);
    return cache[n];
  }
}
console.log(fibonacciOptimized(10))

//console.log(nFibonacci(15 ));




// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

class Queue {
  constructor() {
    this.array = [];

  }
  enqueue(data) {
    this.array.push(data);
  }
  dequeue() {
    return this.array.shift();
  }
  size() {
    return this.array.length;
  }
}




var queue1 = new Queue();
queue1.enqueue("Hi")
queue1.enqueue("Hello")
queue1.enqueue("Hola")


console.log(queue1.size());
console.log(queue1.dequeue()); //Quita el primero
console.log(queue1.size());




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
