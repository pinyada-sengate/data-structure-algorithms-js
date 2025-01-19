class LinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  append(value) {
    let node = {
      value: value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = {
      value: value,
      next: this.head,
    };
    this.head = node;
    this.length++;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
