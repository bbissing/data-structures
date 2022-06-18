var BinarySearchTree = function(value) {
  var tree = Object.create(newMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

var newMethods = {
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    //if root value > node value
    if (this.value > value) {
      // if there's no left node
      if (this.left === null) {
        this.left = newNode;
      } else {
        // if there is left node, continue insert
        this.left.insert(newNode.value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insert(newNode.value);
      }
    }
  },

  contains: function(target) {
    if (this.value === target) {
      return true;
    } else if (this.value > target) {
      return this.left !== null && this.left.contains(target);
    } else {
      return this.right !== null && this.right.contains(target);
    }
  },

  depthFirstLog: function(callback) {
    // var collection = [];

    // var find = function(node) {
    //   collection.push(node.value);
    //   if (node.left !== null) {
    //     find(node.left);
    //   }
    //   if (node.right !== null) {
    //     find(node.right);
    //   }
    // };

    // find(this);
    // return _.each(collection, func);
    var find = function(node) {
      if (node.value) {
        callback(node.value);
      }
      if (node.left !== null) {
        find(node.left);
      }
      if (node.right !== null) {
        find(node.right);
      }
    };
    find(this);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
