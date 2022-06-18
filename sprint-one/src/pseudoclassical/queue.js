var Queue = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function(value) {
  var size = 0;

  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      size += 1;
    }
  }

  return size;
};

Queue.prototype.enqueue = function(value) {
  var length = this.size();

  if (length === 0 && value !== undefined) {
    this.storage['1'] = value;
  } else {
    this.storage[length + 1] = value;
  }
};

Queue.prototype.dequeue = function() {
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
};
