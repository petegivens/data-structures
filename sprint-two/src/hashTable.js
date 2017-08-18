var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, {k: v});
  // console.log('this._storage.get(index).get(0): ', this._storage.get(index).get(0));
  // this._storage.get(index).set(0, k);
  // this._storage.get(index).set(1, v);
  // console.log(this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index[1]);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



// *************Passing first tests********
//
// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };
//
// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, v);
// };
//
// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index);
// };
//
// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, undefined);
// };
