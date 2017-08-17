var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  // Base case
  if ( this.value === target ) {
    hasTarget = true;
    return hasTarget;
  }

  // Recurse case
  for (var i = 0; i < this.children.length; i++) {
    hasTarget = hasTarget || this.children[i].contains(target);
  }

  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
