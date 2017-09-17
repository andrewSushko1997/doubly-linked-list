const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
    	if(this.length) {
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	} else {
    		this._head = node;
    		this._tail = node;
    	}
    	this.length++;

    	return node;

    }

    head() {
    	return this._head.data;
    }

    tail() {
    	return this._tail.data;
    }

    at(index) {
    	if(index > Math.floor(this.length / 2)) {
    		var fromEndCount = this.length - 1;
    		var endNode = this._tail;

    		while(fromEndCount > index) {
    			endNode = endNode.prev;
    			fromEndCount--;
    		}
    		return endNode.data; 
    	}
    	if(index <= Math.floor(this.length / 2)) {
    		var fromBeginCount = 1;
    		var beginNode = this._head;

    		while(fromBeginCount <= index) {
    			beginNode = beginNode.next;
    			fromBeginCount++;
    		}
    		return beginNode.data; 
    	}
    }

    insertAt(index, data) {
    	var currentNode = this._head,
    		count = 0;
    	var node = new Node(data);


		if(index > 0 && index < this.length) {
  		while( count < index) {
  			currentNode = currentNode.next;
  			count++;
  		}
  		node.prev = currentNode.prev;
  		currentNode.prev.next = node;
  		node.next = currentNode;
  		currentNode.prev = node;
		} else if(index === 0) {
			currentNode.prev = node;
			node.next = currentNode;
			this._head = node;
		} else if(index === this.length) {
			currentNode = this._tail;
			node.prev = currentNode;
			currentNode.next = node;
			this._tail = node;
		}
  	this.length++;

    }

    isEmpty() {
    	return this.length === 0 ? true : false;
    }

    clear() {
    	this._head.data = null;
    	this._tail.data = null;
    	this.length = 0;
    }

    deleteAt(index) {
    	var currentNode = this._head;
    	var count = 0;

    	if(index > 0 && index < this.length - 1) {
    		while(count < index) {
    			currentNode = currentNode.next;
    			count++;
    		}
    		currentNode.next.prev = currentNode.prev;
    		currentNode.prev.next = currentNode.next;
    		currentNode.next = null;
    		currentNode.prev = null;

    	} else if(index === 0) {
    		currentNode.next.prev = null;
    		this._head = currentNode.next;
    	}
    	this.length--;
    }

    reverse() {
    	var currentNode = this._head;
    	var saveNode = null;
    	var saveTail = this._tail;
    	var count = 0;

    	this._tail = this._head;
    	this._head = saveTail;

    	while(count < this.length) {
    		saveNode = currentNode.next;
    		currentNode.next = currentNode.prev;
    		currentNode.prev = saveNode;
    	}
    }

    indexOf(data) {
    	var currentNode = this._head;
    	var index = 0;

    	if(currentNode.data !== data) {
    		while(index < this.length) {
    			currentNode = currentNode.next;
    			index++;
    			if(currentNode === null) return -1;
    			if(currentNode.data === data) break;

    		}
    	}
    	return index;
    }
}

module.exports = LinkedList;
