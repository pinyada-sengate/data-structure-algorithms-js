class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
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

  append(value) {
    const node = new Node(value);
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
    this.length++;
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
    newNode.previous = prevNode;
    newNode.next = nextNode;
    nextNode.previous = newNode;
    this.length++;
  }

  remove(index) {
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next.next;
    nextNode.previous = prevNode;
    prevNode.next = nextNode;
    this.length--;
  }
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(20);
doublyLinkedList.prepend(1);
doublyLinkedList.printList();
doublyLinkedList.insert(0, 0);
doublyLinkedList.printList();
doublyLinkedList.insert(5, 100);
doublyLinkedList.printList();
doublyLinkedList.insert(3, 15);
doublyLinkedList.printList();
doublyLinkedList.remove(3);
doublyLinkedList.printList();
