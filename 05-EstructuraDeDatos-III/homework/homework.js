"use strict";
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

BinarySearchTree.prototype.insert = function (value) {
  let node = new BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

//La posiscion en donde esta parado
function mostrar(value) {
  console.log(value);
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, route) {
  
  if(!route || route === "in-order"){
    if (this.left) {
      this.left.depthFirstForEach(cb, route);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, route);
    }
  }else if(route === "pre-order"){
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, route);
    }

    if (this.right) {
      this.right.depthFirstForEach(cb, route);
    }
  }else if(route === "post-order"){
    if (this.left) {
      this.left.depthFirstForEach(cb, route);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, route);
    }
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  if (!array) {
    var array = [];
  }

  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  cb(this.value);
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1;
  } else if (this.left && this.right)
    return 1 + this.left.size() + this.right.size();
  else if (this.left) return 1 + this.left.size();
  else if (this.right) return 1 + this.right.size();
};

var tree = new BinarySearchTree(10);

tree.insert(25);
tree.insert(4);

console.log(tree.contains(1));

tree.insert(3);

//tree.depthFirstForEach("in-order");


console.log(tree);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
