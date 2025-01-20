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

  traverseToIndex(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentIndex++;
      currentNode = currentNode.next;
    }
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length - 1) {
      return this.append(value);
    }

    const prevNode = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
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
myLinkedList.insert(20, 120);
myLinkedList.printList();
