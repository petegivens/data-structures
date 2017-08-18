var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if ( typeof item === 'string' ) {
    if ( !this._storage.includes(item) ) {
      this._storage.push(item);
    }
  }
};

setPrototype.contains = function(item) {
  if ( this._storage.includes(item) ) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  let i = this._storage.indexOf(item);
  this._storage.splice(i, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(n)
 contains: O(n)
 remove: O(n)
 */
