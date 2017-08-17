var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.oldest = 0;
  this.newest = -1;
};

Queue.prototype.enqueue = function(value) {
  if ( typeof value === 'string' ) {
    this[this.newest + 1] = value;
    this.length++;
    this.newest++;
  }
};

Queue.prototype.dequeue = function() {
  var temp = this[this.oldest];
  delete this[this.oldest];
  if ( this.length > 0 ) {
    this.oldest++;
    this.length--;
  }

  return temp;
};

Queue.prototype.size = function() {
  return this.length;
};

var myQueue = new Queue();
