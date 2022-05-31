/**
 * Lista: genera un arreglo ordenado de elementos
 */
class LinkedListItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    const newItem = new LinkedListItem(value, this.head);
    this.head = newItem;
  }
  findItem(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  deleteHead() {
    if (this.head) {
      if (this.head.next) {
        const secondNode = this.head.next;
        this.head = secondNode;
      } else {
        this.head = null;
      }
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let list = new LinkedList();
list.prepend("a");
list.prepend("b");
list.prepend("c");
console.log(list.findItem("b"));
list.print();

/**
 * Cola: genera un arreglo basado en la lógica FIFO
 */
class QueueItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(value) {
    const newItem = new QueueItem(value, null);
    if (this.tail) {
      this.tail.next = newItem;
    }
    this.tail = newItem;
    if (!this.head) {
      this.head = this.tail;
    }
  }
  dequeue() {
    if (!this.head) {
      return null;
    }
    const firstNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return firstNode;
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");

console.log(queue.dequeue()); // saca 1
console.log(queue.dequeue()); // saca 2
console.log(queue.dequeue()); // saca 3
console.log(queue.dequeue()); // null

queue.print();

/**
 * Pila: genera un arreglo basado en la lógica LIFO
 */
class StackItem {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
  stackPush(value) {
    const newValue = new StackItem(value, this.head);
    this.head = newValue;
  }
  stackPop() {
    if (this.head) {
      if (this.head.next) {
        const secondNode = this.head.next;
        this.head = secondNode;
      } else {
        this.head = null;
      }
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const stack = new Stack();
stack.stackPush("1"); // agrega 1
stack.stackPush("2"); // agrega 2
stack.stackPush("3"); // agrega 3
stack.stackPop(); // elimina 3
stack.print(); // [2, 1]

