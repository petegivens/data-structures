var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (typeof value === 'string') {
      storage[size] = value;
      size++;
    }
  };
  someInstance.dequeue = function() {
    var temp = storage[0];
    delete storage[0];
    if (size > 0) {
      size--;
    }
    for (var i = 0; i < Object.keys(storage).length; i++ ) {
      var temp2 = storage[i];
      if(storage[i + 1]) {
        storage[i] = storage[i + 1];
      }
      console.log('storage[' + i + ']:', storage[i])
    }
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
