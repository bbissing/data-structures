var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //var length = Object.keys(storage).length;
    var length = someInstance.size();

    if (length === 0 && value !== undefined) {
      storage['1'] = value;
    } else {
      storage[length + 1] = value;
    }
  };

  someInstance.pop = function() {
    var length = someInstance.size();
    var temp;

    if (length !== 0) {
      for (var key in storage) {
        if (parseInt(key) === length) {
          temp = storage[key];
          delete storage[key];
        }
      }
    }

    return temp;
  };

  someInstance.size = function(value) {
    var size = 0;

    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        size += 1;
      } else {
        return 0;
      }
    }

    return size;
  };

  return someInstance;
};
