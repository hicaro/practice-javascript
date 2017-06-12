var HashTable = require('./hash_table.js');

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
    this.run = function() {
		this.testAddExists();
		this.testProbing();
		this.testGet();
		this.testRemove();
	}

	this.testAddExists = function() {
	  var states = new HashTable(100);
	  
	  states.add("Texas", "Austin");
	
	  assert(states.exists("Texas"));
	}

	this.testProbing = function() {
	  // setting high load to force collisions
	  var states = new HashTable(8);
	
	  states.add("Texas", "Austin");
	  states.add("California", "Sacramento");
	  states.add("New Mexico", "Santa Fe");
	  states.add("Florida", "Tallahassee");
	  states.add("Oregon", "Salem");
	  states.add("Washington", "Olympia");
	  states.add("Utah", "Salt Lake City");
	  states.add("New York", "Albany");
	  states.add("Minnesota", "St. Paul");

	  //  Texas: 1
	  //  California: 0
	  //  New Mexico: 5
	  //  Florida: 5
	  //  Oregon: 4
	  //  Washington: 0
	  //  Utah: 6
	  //  New York: 7
	  //  Minnesota: 6

	  //  0: California:Sacramento
	  //  1: Texas:Austin
	  //  2: Washington:Olympia
	  //  3: New York:Albany
	  //  4: Oregon:Salem
	  //  5: New Mexico:Santa Fe
	  //  6: Florida:Tallahassee
	  //  7: Utah:Salt Lake City

	  assert(states.exists("California"));
	  assert(states.exists("New Mexico"));
	  assert(states.exists("Florida"));
	  assert(!states.exists("Minnesota"));  // no room
	}

	this.testGet = function() {
	  var states = new HashTable(100);

	  states.add("Texas", "Austin");

	  assert(states.get("Texas") == "Austin");
	}

	this.testRemove = function() {
	  var states = new HashTable(100);

	  states.add("Texas", "Austin");

	  assert(states.exists("Texas"));

	  states.remove("Texas");

	  assert(!states.exists("Texas"));
	}
};

module.exports = Tests;