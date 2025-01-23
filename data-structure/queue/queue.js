class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // get the first item in the queue
  peek() {
    console.log(this.first);
  }

  // add to the queue
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }

  //remove from the first of the queue
  dequeue() {
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }

    this.length--;

    return temp;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
