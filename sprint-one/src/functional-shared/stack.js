var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

stackMethods = {};

stackMethods.push = function(value) {
  if ( typeof value === 'string' ) {
    this[this.length] = value;
    this.length++;
  }
};

stackMethods.pop = function() {
  var temp = this[this.length - 1];
  delete this[this.length - 1];
  if ( this.length > 0 ) {
    this.length --;
  }
  return temp;
};

stackMethods.size = function() {
  return this.length;
};

// constructorPropertyCount = Object.keys(constructor).length;
// assuming(extendsConstructor).expect(constructorPropertyCount).to.be.above(0);
