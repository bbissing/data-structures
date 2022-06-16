var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

// var newTree = {
//   value: value,
//   children: [{value:value, children: [], ???addChild: f(n), contains: f(n)}, {}]
//   addchild: f(n),
//   contains: f(n)
// }

var treeMethods = {};
// O(1)
treeMethods.addChild = function(value) {
  // push a subtree to the children
  this.children.push(Tree(value));
};

// O(n)
treeMethods.contains = function(target) {
  // if it's in the root node, return true
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};