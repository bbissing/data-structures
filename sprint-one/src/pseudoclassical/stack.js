var Stack = function(value) {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};



Stack.prototype.size = function(value) {
  var size = 0;

  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      size += 1;
    }
  }

  return size;
};

Stack.prototype.push = function(value) {
  var length = this.size();

  if (length === 0) {
    this.storage['1'] = value;
  } else {
    this.storage[length + 1] = value;
  }
};

Stack.prototype.pop = function(value) {
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
};

var Initiate = new Stack(value);
