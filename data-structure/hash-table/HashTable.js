class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //O(1)
  // It looks like O(n) but normally hash algorithm it is really fast so O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //O(1)
  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data;
  }

  //O(1) if no collisions
  //O(n) with collosions
  get(key) {
    const index = this._hash(key);
    const currentBucket = this.data[index];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  // no guaruntee the order
  keys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }

    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
