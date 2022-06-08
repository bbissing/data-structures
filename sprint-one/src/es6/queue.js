class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size(value) {
    var size = 0;

    for (var key in this.storage) {
      size += 1;
    }

    return size;
  }

  enqueue(value) {
    var length = this.size();

    if (length === 0 && value !== undefined) {
      this.storage['1'] = value;
    } else {
      this.storage[length + 1] = value;
    }
  }

  dequeue() {
    var length = this.size();
    var temp;

    if (length !== 0) {
      for (var key in this.storage) {
        if (parseInt(key) === 1) {
          temp = this.storage[key];
          delete this.storage[key];
        } else {
          this.storage[parseInt(key) - 1] = this.storage[key];
          delete this.storage[key];
        }
      }
    }

    return temp;
  }

}

var Initiate = new Queue(value);
