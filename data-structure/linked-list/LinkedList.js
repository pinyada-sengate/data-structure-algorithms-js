class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  insert(index, value) {
    let currentNode = this.head;
    let currentIndex = 0;

    if (index === 0) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    if (index === this.length - 1) {
      currentNode = this.tail;
      const newNode = new Node(value);
      const nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    const prevIndex = index - 1;
    while (currentNode !== null) {
      if (currentIndex === prevIndex) {
        const newNode = new Node(value);
        const nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        break;
      }
      currentIndex++;
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.insert(0, 0);
myLinkedList.printList();
myLinkedList.insert(5, 100);
myLinkedList.printList();
