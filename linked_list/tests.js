var LinkedList = require('./list.js');

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
        this.testSizeEmpty();
		this.testSize1to2();
		this.testEmpty();
		this.testValueAt();
		this.testPushFront();
		this.testPopFront();
		this.testPushBack();
		this.testPopBack();
		this.testInsertFromEmpty();
		this.testInsertFromNonEmpty();
		this.testInsertBack();
		this.testInsertMiddle();
		this.testErase();
		this.testEraseFirst();
		this.testEraseLast();
		this.testValueNFromEnd();
		this.testReverseOne();
		this.testReverseTwo();
		this.testReverseThree();
		this.testRemoveNone();
		this.testRemoveOnly();
		this.testRemoveFirst();
		this.testRemoveLast();
		this.testRemoveMiddle();
    }

    this.testSizeEmpty = function()
	{
		var list = new LinkedList(); 
		assert(list.size() == 0);
	};
	
	this.testSize1to2 = function()
	{
		var list = new LinkedList();
		list.push_front(4);

		assert(list.size() == 1);
	
		list.push_front(9);
		assert(list.size() == 2);
	};
	
	this.testEmpty = function()
	{
		var list = new LinkedList();
		assert(list.isEmpty());
		
		list.push_front("word");
		assert(!list.isEmpty());
	};
	
	this.testValueAt = function()
	{
		var list = new LinkedList();
        
        list.push_front(99);
        assert(list.value_at(0) == 99);
        
        list.push_front(3);
        list.push_front(122); 
        assert(list.value_at(0) == 122);
        assert(list.value_at(1) == 3);
        assert(list.value_at(2) == 99);
	};
	
	this.testPushFront = function()
	{
		var list = new LinkedList();
        
        list.push_front(753);
        list.push_front(159);
        
        assert(list.size() == 2);
        assert(list.value_at(0) == 159);
        assert(list.value_at(1) == 753);
	};
	
	this.testPopFront = function()
	{
		var list = new LinkedList();

        list.push_front(12);
        list.push_front(11);
        
        assert(list.pop_front() == 11);
        assert(list.pop_front() == 12);
	};
		
	this.testPushBack = function()
	{
		var list = new LinkedList();
		
		list.push_back(123);
        list.push_back(456);
        
        assert(list.size() == 2);
        assert(list.value_at(0) == 123);
        assert(list.value_at(1) == 456);		
	};
	
	this.testPopBack = function()
	{
		var list = new LinkedList();
		list.push_back(33);
        list.push_back(36);
        
        assert(list.pop_back() == 36);
        assert(list.pop_back() == 33);
        assert(list.size() == 0);		
	};

	this.testInsertFromEmpty = function()
	{
		var list = new LinkedList();
		
		list.insert(0, 3);
		assert(list.front() == 3);
	};
		

	this.testInsertFromNonEmpty = function()
	{
		var list = new LinkedList();
		
		list.push_front(123);		
		list.insert(0, 3);
		assert(list.front() == 3);
		assert(list.back() == 123);
	};
	
	this.testInsertBack = function()
	{
		var list = new LinkedList();
		
		list.push_front(123);	
		list.insert(1, 3); 
		
		assert(list.back() == 3);
	};
	
	this.testInsertMiddle = function()
	{
		var list = new LinkedList();		
		
        list.push_back(123);
        list.push_back(456);	
        list.push_back(999);	
        list.insert(2, 777);
        
        assert(list.value_at(1) == 456);
        assert(list.value_at(2) == 777);
        assert(list.back() == 999);
		
	};
	
	this.testErase = function()
	{
		var list = new LinkedList();
		
        list.push_back(44);
        list.erase(0);

        assert(list.size() == 0);
	};
		

	this.testEraseFirst = function()
	{
		var list = new LinkedList();
		
        list.push_back(44);
        list.push_back(55);
        list.erase(0);

        assert(list.size() == 1);
        assert(list.front() == 55);
	};
		

	this.testEraseLast = function()
	{
		var list = new LinkedList();
		
        list.push_back(44);
        list.push_back(55);
        list.erase(1);

        assert(list.size() == 1);
        assert(list.front() == 44);
	};
		

	this.testValueNFromEnd = function()
	{
		var list = new LinkedList();
		
		list.push_back(44);
        list.push_back(55);
        list.push_back(66);

        assert (list.value_n_from_end(1) == 66);
        assert (list.value_n_from_end(2) == 55);
        assert (list.value_n_from_end(3) == 44);
	};
		

	this.testReverseOne = function() {
		var list = new LinkedList();
        list.push_back(44);

        list.reverse();

        assert (list.front() == 44);
	};

	this.testReverseTwo = function() {
		var list = new LinkedList();
		
        list.push_back(44);
        list.push_back(55);

        list.reverse();

        assert (list.front() == 55);
        assert (list.back() == 44);
	};

	this.testReverseThree = function() {
		var list = new LinkedList();
		
        list.push_back(44);
        list.push_back(55);
        list.push_back(66);

        list.reverse(); 

        assert (list.value_at(0) == 66);
        assert (list.value_at(1) == 55);
        assert (list.value_at(2) == 44);
	};

	this.testRemoveNone = function() {
		var list = new LinkedList();
		
        list.remove_value(5);

		assert (list.size() == 0);
	};

	this.testRemoveOnly = function() {
		var list = new LinkedList();
		
        list.push_back(5);
        list.remove_value(5);

        assert (list.size() == 0);
	};

	this.testRemoveFirst = function() {
		var list = new LinkedList();
		
        list.push_back(5);
        list.push_back(22);
        list.remove_value(5);

        assert (list.size() == 1);
        assert (list.front() == 22);
	};

	this.testRemoveLast = function() {
		var list = new LinkedList();
		
        list.push_back(5);
        list.push_back(22);
        list.remove_value(5);

        assert (list.size() == 1);
        assert (list.front() == 22);
	};

	this.testRemoveMiddle = function() {
		var list = new LinkedList();
		
        list.push_back(5);
        list.push_back(22);
        list.remove_value(5);

        assert (list.size() == 1);
        assert (list.front() == 22);		
	};
};

module.exports = Tests;