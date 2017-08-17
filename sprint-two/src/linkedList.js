var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head && !list.tail) {
      list.head = node;
      list.head.next = node;
      list.tail = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head) {
      var temp = list.head.value;
      if (list.head.next) {
        list.head = list.head.next;
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
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
