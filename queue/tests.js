var Queue = require('./queue.js');

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

var Tests = function(){

    this.run = function(){
        this.testEmpty();
		this.testEnqueue();
		this.testDequeue();
    }

    this.testEmpty = function()
	{
		var queue = new Queue(); 
		assert(queue.isEmpty());

		queue.enqueue(3);
		assert (!queue.isEmpty());
	};
	
	this.testEnqueue = function()
	{
		var queue = new Queue();
		queue.enqueue(12.3);
		queue.enqueue(4.235);
		queue.enqueue(5.4);
		queue.enqueue(7.0);
		queue.enqueue(885314.32214);

		assert (!queue.isEmpty());
	};
	
	this.testDequeue = function()
	{
		var queue = new Queue();
		queue.enqueue(100);
		queue.enqueue(200);
		assert (queue.dequeue() == 100);
		queue.enqueue(300);
		assert (queue.dequeue() == 200);
		queue.enqueue(400);
		queue.enqueue(500);
		queue.enqueue(600);
		queue.enqueue(700);
		assert (queue.dequeue() == 300);
		assert (queue.dequeue() == 400);
		assert (queue.dequeue() == 500);
		assert (queue.dequeue() == 600);
		assert (queue.dequeue() == 700);

		assert (queue.isEmpty());
	};
};

module.exports = Tests;