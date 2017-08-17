var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.oldest = 0;
  newQueue.newest = -1;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if ( typeof value === 'string' ) {
    this[this.newest + 1] = value;
    this.length++;
    this.newest++;
  }
  //console.log('this: ', this, 'oldest: ', this.oldest, 'newest: ', this.newest);
};

queueMethods.dequeue = function() {
  var temp = this[this.oldest];
  delete this[this.oldest];
  if ( this.length > 0 ) {
    this.oldest++;
    this.length--;
  }
  return temp;
};

queueMethods.size = function() {
  return this.length;
};
