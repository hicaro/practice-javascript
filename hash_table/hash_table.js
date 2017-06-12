var HashTable = function(size){
    this._size = size;

    this._table = new Array(this._size);
    for (var i = 0; i < this._size; i++){
        this._table[i] = null;
    }

    this.HashObject = function(){
        return {
            key: null,
            value: null
        };
    };
};

HashTable.prototype.hash = function(key, trial){
    return (this.auxiliary_hash(key) + trial) % this._size;
};

HashTable.prototype.auxiliary_hash = function(key){
    var hash = 0;
    
    for(var i = 0; i < key.length; i++){
        hash = hash * 31 + key.charCodeAt(i);
    }
    
    return parseInt(hash % this._size, 10);
};

HashTable.prototype.add = function(key, value){
    var trial = 0;
    
    while(trial < this._size){
        var index = this.hash(key, trial); 
        
        if(this._table[index] == null){ 
            this._table[index] = new this.HashObject();
            this._table[index].key = key;
            this._table[index].value = value;
            break;
        }
        else if(this._table[index].key == null || this._table[index].key == key){ 
            this._table[index].key = key;
            this._table[index].value = value;
            break;
        }
        
        trial++;
    }		
};

HashTable.prototype.remove = function(key){
    var trial = 0;
    
    while(trial < this._size){
        var index = this.hash(key, trial);
        
        if(this._table[index] == null){
            break;
        }
        
        if(this._table[index].key == key){
            this._table[index].key =  null;
            this._table[index].value =  null;
        }
        
        trial++;
    }	
};

HashTable.prototype.get = function(key){
    var trial = 0;
    
    while(trial < this._size){
        var index = this.hash(key, trial);
        
        if(this._table[index] == null){
            break;
        }
        
        if(this._table[index].key == key){
            return this._table[index].value;
        }
        
        trial++;
    }	
    
    return null;
};

HashTable.prototype.exists = function(key){
    var trial = 0;
    
    while(trial < this._size){
        var index = this.hash(key, trial);
        
        if(this._table[index] == null){
            return false;
        }
        
        if(this._table[index].key == key){
            return true;
        }
        
        trial++;
    }	
    
    return false;
};

module.exports = HashTable;