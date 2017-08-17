

// Instantiate a new graph
var Graph = function() {
  //nodes is an array of nodes stored as raw values
  this.nodes = [];
  //edges is a 2-dimensional array of edges stored as arrays.
  //each 2nd-level array is a list of all the indices of the nodes that are connected.
  //edges[0] is for the node at nodes[0]
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // adding node to graph
  this.nodes.push(node);
  this.fromI

  var nodeI = this.nodes.indexOf(node);
  this.edges[nodeI] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
     if ( this.nodes[i] === node){
       return true;
     }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++){
    if ( this.nodes[i] === node ) {
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromI = this.nodes.indexOf(fromNode);
  var toI = this.nodes.indexOf(toNode);

  if ( this.edges[fromI].includes(toI) ) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromI = this.nodes.indexOf(fromNode);
  var toI = this.nodes.indexOf(toNode);

  this.edges[fromI].push(toI);
  this.edges[toI].push(fromI);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromI = this.nodes.indexOf(fromNode);
  var toI = this.nodes.indexOf(toNode);

  if ( this.edges[fromI].includes(toI) ) {
    var edgeI = this.edges[fromI].indexOf(toI);
    this.edges[fromI].splice(edgeI, 1);
  }

  if ( this.edges[toI].includes(fromI) ) {
    var edgeI = this.edges[toI].indexOf(fromI);
    this.edges[toI].splice(edgeI, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(n => cb(n));
};

let graph = new Graph();
/*
 * Complexity: What is the time complexity of the above functions?
 */
