

// Instantiate a new graph
var Graph = function() {
  //nodes is an array of nodes stored as raw values
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // adding node to graph
  this.nodes[node] = {'value': node, 'edges': []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = this.nodes[node]['edges'];
  for (var i = 0; i < edges.length; i++) {
    var otherEdges = this.nodes[edges[i]]['edges'];
    otherEdges.splice(otherEdges.indexOf(node), 1);
  } 
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode]['edges'].includes(toNode) && this.nodes[toNode]['edges'].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode]['edges'].push(toNode);
  this.nodes[toNode]['edges'].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode]['edges'].indexOf(toNode);
  this.nodes[fromNode]['edges'].splice(index, 1);
  index = this.nodes[toNode]['edges'].indexOf(fromNode);
  this.nodes[toNode]['edges'].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]['value']);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
