
function Node(data){
    this.data = data;
    this.next = null;
}

function List(){
    this.head = null;
    this._length = 0; //_variable privada
}

//var node = new Node("Juan")
//console.log(node);

var list = new List();

//Add to linkedList
//Case1: insert first node at a head
//Case2: i have at an head

List.prototype.add = function(data){
    var node = new Node(data);
    var current = this.head;
    
    if(!current){
        this.head = node;
        this._length++;
        return node;
    }
    while(current.next){
        current.next;
    }
    current.next=node;
    this._length++;
    return node;
}
list.add("Jeff")
list.add("Andre")
list.add("Nuñez")
list.add("Cofre")


console.log(list);

