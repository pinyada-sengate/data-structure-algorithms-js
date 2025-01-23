class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(value) {
    this.data.push(value);
    this.length++;
  }

  peek() {
    console.log(this.data[this.length - 1]);
  }

  pop() {
    const temp = this.data.pop();
    this.length--;
    return temp;
  }
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("udemy.com");
myStack.peek();
console.log(myStack.pop());
myStack.peek();
