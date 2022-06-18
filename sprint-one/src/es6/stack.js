class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(value) {
    this.storage = {};
  }

  size(value) {
    var size = 0;

    for (var key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        size += 1;
      }
    }

    return size;
  }

  push(value) {
    var length = this.size();

    if (length === 0) {
      this.storage['1'] = value;
    } else {
      this.storage[length + 1] = value;
    }
  }


  pop(value) {
    var length = this.size();
    var temp;

    if (length !== 0) {
      for (var key in this.storage) {
        if (parseInt(key) === length) {
          temp = this.storage[key];
          delete this.storage[key];
        }
      }
    }

    return temp;
  }

}

var Initiate = new Stack(value);