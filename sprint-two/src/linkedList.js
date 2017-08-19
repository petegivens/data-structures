var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head && !list.tail) {
      list.head = node;
      list.head.next = null;
      list.tail = node;
      list.tail.previous = null;
    }
    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail;
    }
    list.tail = node;
  };

// ^^ i think it's  good up there
// vv continue updating the methods below to accommodate previous property;
  list.removeHead = function() {
    if (list.head) {
      var temp = list.head.value;
      if (list.head.next) {
        list.head = list.head.next;
        list.head.previous = null;
      } else {
        list.head = null;
      }
    }
    return temp;
  };

  list.contains = function(target) {
    var containsRecursive = function(node, target) {
      if (node === null) {
        return false;
      }
      if (node.value === target) {
        return true;
      }
      if (node.next) {
        return containsRecursive(node.next, target);
      } else {
        return false;
      }
    };
    return containsRecursive(list.head, target);
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (!list.head && !list.tail) {
      list.head = node;
      list.head.next = null;
      list.tail = node;
      list.tail.previous = null;
    }
    if (list.head) {
      list.head.previous = node;
      node.next = list.head;
    }
    list.head = node;
  };

  list.removeTail = function() {
    if (list.tail) {
      var temp = list.tail.value;
      if (list.tail.previous) {
        list.tail = list.tail.previous;
        list.tail.next = null;
      } else {
        list.tail = null;
      }
    }
    return temp;

  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail, and removeHead are both O(1).
 contains is O(n).
 */
