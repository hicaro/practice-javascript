var Vector = require("./vector.js");

var VectorTests = function() {

  this.run = function(){
    this._testSize();
  };

  this._testSize = function()
  {
    var tester = new Vector(3);
    assert (tester.size() == 0);

		var items_to_add = 5;
		for (var i = 0; i < items_to_add; ++i) {
			tester.push(i + 1);
		}
		assert (tester.size() == items_to_add);
  }

  this._testIsEmpty = function()
	{
		var tester = new Vector(3);
		assert(tester.isEmpty());
	}
	
	this._testCapacity = function()
	{
		var tester = new Vector(3);
		// test increasing size
		assert (tester.capacity() == 3);
		
		for (var i = 0; i < 17; ++i) {
			tester.push(i + 1);
		}
		assert (tester.capacity() == 24); 
		
		for (var j = 0; j < 20; ++j) {
			tester.push(j + 1);
		}
		assert (tester.capacity() == 48);

		// test decreasing size
		for (var k = 0; k < 30; ++k) {
			tester.pop();
		}
		assert (tester.capacity() == 24);
		
		for (var k = 0; k < 7; ++k) {
			tester.pop();
		}
		assert (tester.capacity() == 3);
	}
	
	this._testValueAt = function()
	{
		var tester = new Vector(3);
		tester.push(4);
		tester.push(9);
		tester.push(12);
		try {
			assert (tester.at(0) == 4);
			assert (tester.at(1) == 9);
			assert (tester.at(2) == 12);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
	}
	
	this._testPop = function()
	{
		var tester = new Vector(1);
		tester.push(3);

		var popped = tester.pop();
		assert (popped == 3);
		tester.push(9);
		tester.push(8);

		assert (tester.size() == 2);
		var popped2 = tester.pop();
		assert (popped2 == 8);
		assert (tester.size() == 1);
		
	}
	
	this._testInsert = function() {
		var tester = new Vector(3);
		tester.push(5);
		tester.push(7);
		tester.push(9);
		
		try {
			tester.insert(0, 4);
			assert (tester.at(0) == 4);
			assert (tester.at(1) == 5);
			assert (tester.at(2) == 7);
			assert (tester.at(3) == 9);
			
			tester.insert(3, 8);
			assert (tester.at(3) == 8);
			assert (tester.at(4) == 9);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}

	this._testPrepend = function() {
		var tester = new Vector(3);
		tester.push(9);
		tester.push(8);
		tester.push(7);
		
		try {
			tester.prepend(6);
			assert (tester.size() == 4);
			
			assert (tester.at(0) == 6);
			assert (tester.at(1) == 9);
			assert (tester.at(3) == 7);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}

	this._testDelete = function() {
		var tester = new Vector(1);
		tester.push(5);
		
		try {
			tester.delete(0);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assert (tester.size() == 0);

		tester.push(9);
		tester.push(10);
		tester.push(11);
		
		try {
			tester.delete(1);
			assert (tester.size() == 2);
			assert (tester.at(0) == 9);
			assert (tester.at(1) == 11);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	this._testRemove = function() {
		var tester = new Vector(5);
		tester.push(50);
		tester.push(2);
		tester.push(50);
		tester.push(4);
		tester.push(50);
		
		try {
			tester.remove(50);
			
			assert (tester.size() == 2);
			assert (tester.at(0) == 2);
			assert (tester.at(1) == 4);
		} catch (err) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}

	this._testFind = function() {
		var tester = new Vector(3);
		tester.push(4);
		tester.push(7);
		tester.push(11);
		assert (tester.find(5) == -1);
		assert (tester.find(4) == 0);
		assert (tester.find(7) == 1);
		assert (tester.find(11) == 2);
	}
};

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

module.exports = VectorTests;