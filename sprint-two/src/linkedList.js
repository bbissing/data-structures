var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // O(1)
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };
  // O(1)
  list.removeHead = function() {
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  // O(n)
  list.contains = function(target) {
    //recursion
    var findTarget = function(node, target) {
      //break the recursion here!
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return findTarget(node.next, target);
      }
    };
    return findTarget(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
