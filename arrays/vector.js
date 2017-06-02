var Vector = function (capacity)
{
  this._capacity = capacity;
  this._size = 0;
  this._array = [];

  this.size = function() {
    return this._size;
  };

  this.capacity = function() {
    return this._capacity;
  };

  this.isEmpty = function() {
    return this._size == 0;
  }

  this.at = function(index) {
      this._checkBounds(index);
      return this._array[index];
  }

  this.push = function(item) {
    this._expand();
    this._array[this._size++] = item;
  }

  this.insert = function(index, item) {
    this._checkBounds(index);
    this._expand();

    for(var i = this._size; i > index; i--) {
      this._array[i] = this._array[i - 1];
    }

    this._array[index] = item;
    this._size++;
  }

  this.prepend = function(item) {
    this.insert(0, item); 
  }

  this.pop = function() {
    this._shrink();
    return this._array[--this._size];
  }

  this.delete = function(index) {
    this._checkBounds(index);
    this._shrink();

    var aux = this._array[index];

    for(var i = index; i < this._size - 1; i++){
      this._array[i] = this._array[i + 1];
    }

    this._size--;
    return aux;
  }

  this.remove = function(item) {
    for (var i = 0; i < this._size; i++){
      if(this._array[i] == item){
        this.delete(i);
				// as a item is removed and the array is shifted to the left
				i--;
      }
    }
  }

  this.find = function(item) {
    for (var i = 0; i < this._size; i++){
      if(this._array[i] == item){
        return i;
      }
    }

    // return -1 in case of not finding the referred item
    return -1;
  }

  this._checkBounds = function(index) {
    if (index < 0 || index >= this._size) {
      throw new Exception("Index out of bounds.");
    }
  }

  this._expand = function() {
    if (this._size == this._capacity) {
      this._capacity = this._capacity * 2;

      var aux = [];
      for (var i = 0; i < this._size; i++) {
        aux[i] = this._array[i];
      } 
      this._array = aux;
    }
  }

  this._shrink = function() {
    if (this._size <= this._capacity / 4) {
      this._capacity = this._capacity / 2;

      var aux = [];
      for (var i = 0; i < this._size; i++) {
        aux[i] = this._array[i];
      } 
      this._array = aux;
    }
  }

}

module.exports = Vector;