
// Instantiate a new graph
var Graph = function() {
  this.adjacentList = {};
};

// Add a node to the graph, passing in the node's value.
// O(1)
Graph.prototype.addNode = function(node) {
  this.adjacentList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// O(N)
Graph.prototype.contains = function(node) {
  if (this.adjacentList[node] !== undefined) {
    return true;
  }
  return false;
  //for (var key in this.adjacentList) if(key === node.toString()))

};

// Removes a node from the graph.
// O(N)
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.adjacentList[node].length; i++) {
    var currentNum = this.adjacentList[node][i];
    this.removeEdge(currentNum, node);
  }

  delete this.adjacentList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// O(N)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.adjacentList[fromNode].indexOf(toNode) >= 0) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
// O(N)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.adjacentList[fromNode].push(toNode);
  this.adjacentList[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
// O(N)
Graph.prototype.removeEdge = function(fromNode, toNode) {

  this.adjacentList[fromNode] = this.adjacentList[fromNode].filter(
    function(element) {
      return element !== toNode;
    }
  );
  this.adjacentList[toNode] = this.adjacentList[toNode].filter(
    function(element) {
      return element !== fromNode;
    }
  );
};

// Pass in a callback which will be executed on each node of the graph.
// O(N)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.adjacentList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


