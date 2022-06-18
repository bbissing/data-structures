

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //         0          1   2         3
  //[[[v1,v1],[v2,v2]],   ,   ,[['Ste', 'Sea']], , ]

  if (Array.isArray(this._storage.get(index))) {
    if (this._storage.get(index)[0][0] === k) {
      this._storage.get(index)[0][1] = v;
    }
    this._storage.get(index).push([k, v]);
  } else {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return null;
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, i, storage) {
    if (i === index) {
      storage[i].pop();
    }
  });
  // Cannot directly use this._storage[index] = undefined;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


