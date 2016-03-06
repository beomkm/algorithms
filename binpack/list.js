function Node(element)
{
  this.data = element;
  this.right = null;
  this.left = null;
}

function List()
{
  this.length = 0;
  this.head = new Node(null);
  this.tail = this.head;
}

List.prototype.push = function(element)
{
  var node = this.tail;
  //while(node.right != null) {
  //	node = node.right;
  //}
  node.right = new Node(element);
  node.right.left = node;
  this.tail = node.right;
  ++this.length;
}

List.prototype.erase = function(node)
{
  if(node == this.head) {
    console.log("Do not erase headnode");
    return;
  }
  if(node == this.tail)
    this.tail = this.tail.left;

  node.left.right = node.right;
  if(node.right != null)
    node.right.left = node.left;

  --this.length;
  return node.right;
}

List.prototype.insert = function(item)
{
  var n = 0;
  var isFound = false;
  var newNode = new Node(item);
  var node = this.head.right;
  newNode.left = this.head;
  while(node != null) {
    ++n;
    if(node.data.w*node.data.h > item.w*item.h) {
      newNode.left = node;
      node = node.right;
    }
    else {
      newNode.right = node;
      node.left.right =  newNode;
      node.left = newNode;
      isFound = true;
      ++this.length;
      break;
    }
  }
  if(!isFound) {
    this.push(newNode.data);
  }

  return n;
}

List.prototype.merge = function(list)
{
  if(list.length < 1) return;
  this.tail.right = list.head.right;
  list.head.right.left = this.tail;
  this.tail = list.tail;
  this.length += list.length;
}
