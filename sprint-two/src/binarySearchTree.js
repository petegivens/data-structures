var BinarySearchTree = function(value) {
  this.value = value;
//
// this.level = null;
// this.level.queue = new Set([]);

  // add level property to each new node
  // level should be parent's level +1
};

BinarySearchTree.prototype.insert = function(value) {
// for every insert, set the new node's level to be parent's level + 1
// add add to its level's queue in its proper place (sorted numerically)



  if ( value < this.value ) {
    if ( this.left ) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if ( value > this.value ) {
    if ( this.right ) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var containsTarget = false;

  if ( this.value === target ) {
    return true;
  }
  if ( target < this.value && this.left) {
    containsTarget = this.left.contains(target)
  } else if ( target > this.value && this.right) {
    containsTarget = this.right.contains(target)
  }
  return containsTarget;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if ( this.left ) {
    this.left.depthFirstLog(cb);
  } if ( this.right ) {
    this.right.depthFirstLog(cb)
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  // loop through this.level.queue
    // loop through each array inside of that
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
