var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var oldest = 0;
  var newest = -1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if ( typeof value === 'string' ) {
      storage[newest + 1] = value;
      size++;
      newest++;
      console.log('size:', size, 'oldest:', oldest, 'newest:', newest);
    }
  };

  someInstance.dequeue = function() {
    var temp = storage[oldest];
    delete storage[oldest];
    if ( size > 0 ) {
      size--;
      oldest++;
      console.log('size:', size, 'oldest:', oldest, 'newest:', newest);
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
