// Constructor
var Tree = function(value) {
  var newTree = {};

  newTree.parent = null;
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

// Shared functionality
var treeMethods = {};

// Function for adding Child nodes.
treeMethods.addChild = function(value) {
  var temp = Tree(value);
  temp.parent = this;
  this.children.push(temp);
};

// Function for checking if the tree contains a target value.
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
 addChild: O()
 contains: O(n)
 */
