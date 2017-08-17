var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.oldest = 0;
  newQueue.newest = -1;
  return newQueue;
};

var queueMethods = {
  'enqueue': function(value) {
    if (typeof value === 'string') {
      this[this.newest + 1] = value;
      this.newest++;
      this.length++;
    }
  },
  'dequeue': function() {
    var temp = this[this.oldest];
    delete this[this.oldest];
    if (this.length > 0) {
      this.length--;
      this.oldest++;
    }
    return temp;
  },
  'size': function() {
    return this.length;
  }
};
