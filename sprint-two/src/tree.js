// Constructor
var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

// Shared functionality
var treeMethods = {};

// Function for adding Child nodes.
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// Function for checking if the tree contains a target value.
treeMethods.contains = function(target) {
    // Default value
  var hasTarget = false;

  // Base case
  if ( this.value === target ) {
    hasTarget = true;
    return hasTarget;
  }

  // Recurse case
  for ( var i = 0; i < this.children.length; i++ ) {
    hasTarget = hasTarget || this.children[i].contains(target);
  }

  return hasTarget;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O()
 contains: O(n)
 */
