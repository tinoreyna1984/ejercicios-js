/**
 * Estructuras para la cola
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

let cajas = [];
let queue = new Queue();
queue.enqueue({client: "Juan", product: "Leche", cant: 2, price: 10});
queue.enqueue({client: "Pedro", product: "Arroz", cant: 1, price: 20});
queue.enqueue({client: "Maria", product: "Huevos", cant: 3, price: 30});
console.log(queue)
cajas[5] = queue;
console.log(cajas)

