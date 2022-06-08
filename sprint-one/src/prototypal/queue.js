var Queue = function() {
  var someInstance = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function(value) {
  var size = 0;

  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      size += 1;
    }
  }

  return size;
};

queueMethods.enqueue = function(value) {
  var length = this.size();

  if (length === 0 && value !== undefined) {
    this.storage['1'] = value;
  } else {
    this.storage[length + 1] = value;
  }
};

queueMethods.dequeue = function() {
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


