var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (typeof value === 'string') {
      storage[size] = value;
      size++;
      // console.log('size after push:', size);
    }
  };

  someInstance.pop = function() {
    var temp = storage[size - 1];
    delete storage[size - 1];
    if (size > 0) {
      size--;
    }
    return temp;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};
