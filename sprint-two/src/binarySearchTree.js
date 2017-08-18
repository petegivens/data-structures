var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
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
/*
 * Complexity: What is the time complexity of the above functions?
 */
