var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  //set._storage = LimitedArray(10);
  return set;
};

var setPrototype = {};
// O(N)
setPrototype.add = function(item) {
  if (this._storage.indexOf(item) < 0) {
    this._storage.push(item);
  }
};

// O(1)
// Set.prototype.add = function(item) {
//   var index = getIndexBelowMaxForKey(item, 10);
//   this._storage.set(index, item);
// };


// O(N)
setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) >= 0) {
    return true;
  } else {
    return false;
  }
};
// O(N)
setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index === 0) {
    this._storage.shift();
  } else if (index === this._storage.length - 1) {
    this._storage.pop();
  } else {
    var first = this._storage.slice(0, index);
    var second = this._storage.slice(index + 1, this._storage.length);
    this._storage = first.concat(second);
  }

  // this._storage.filter(function(element) {
  //   return element !== item;
  // });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
