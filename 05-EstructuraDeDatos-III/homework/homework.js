'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinaryTree() {
  this.root = null;
}


BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value)
      return;
    }else{
      return this.left.insert(value)
    }
  }
  if(value > this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value)
      return;
    }else{
      return this.right.insert(value)
    }
  }


}
var node = new BinarySearchTree()
var tree = new BinaryTree()

console.log(node.insert(5))
console.log(node.insert("asd"))

console.log(node.insert(10))
console.log(node.insert(9))

tree.root = node;
console.log(tree)





console.log(tree)





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
