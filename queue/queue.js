var LinkedList = require('./list.js');

var Queue = function(){
    this._list = new LinkedList();
};

Queue.prototype.isEmpty = function(){
    return this._list.isEmpty();
};

Queue.prototype.enqueue = function(value){
    this._list.push_back(value);
};

Queue.prototype.dequeue = function(){
    return this._list.pop_front();
};


module.exports = Queue;
