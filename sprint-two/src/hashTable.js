var HashTable = function(limit) {
  this._limit = limit || 8;
  this._tupleCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, shuffle) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, {});
  }

  var bucket = this._storage.get(index);
  var temp = Object.keys(bucket).length;

  bucket[k] = v;

  if (temp < Object.keys(bucket).length) {
    this._tupleCount++;
    if (!shuffle){
      this.checkRatio();
    }
  }

  // tempHash is not getting passed correct limit when shuffle is called. for reduction only
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // console.log('bucket inside of retrieve function:', bucket);
  // console.log('tuple count:', this._tupleCount);
  if (bucket){
    return bucket[k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (bucket[k]){
    delete bucket[k];
    this._tupleCount--;
    this.checkRatio();
  }

};

HashTable.prototype.checkRatio = function() {
  var ratio = this._tupleCount / this._limit;

  if ( ratio >= .75 ) {
    this._limit = this._limit * 2;
    this.shuffle(this._limit);
  } else if ( ratio < .25) {
    this._limit = this._limit / 2;
    this.shuffle(this._limit);
  }
}

HashTable.prototype.shuffle = function(newLimit) {
  // create new temp variable
  // assign temp to new HashTable using new _limit
  // loop through current limitedArray and assign kv pairs to temp storage
  // reassign limitedArray storage to temp storage
  console.log('Ratio of tuples to storage size is inefficent, reshuffling....');
  console.log('Hash Table size has been changed to ', this._limit);

  var tempHash = new HashTable(newLimit);

  this._storage.each(function(bucket){
    for (var key in bucket) {
      tempHash.insert(key, bucket[key], true);
    }
  });

  this._storage = tempHash._storage;
}
// ratio = total node count / size
// if ratio >= .75 ratio = ratio * 2
//

/// if (ratio < .25 && !(this._limit / 2 < 8)) {
//   this._limit = this.limit / 8 ;
// }
//
// hasReachedTwentyFive = false;
