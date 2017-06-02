var LinkedList = function (){
    this._head = null;
    this._tail = null;
    this._size = 0;

    this.node = function(){
        return {
            next: null,
            value: 0
        };
    };
};

LinkedList.prototype.size = function(){
    return this._size;
};

LinkedList.prototype.isEmpty = function(){
    return this._size == 0;
};

LinkedList.prototype.value_at = function(index){
    if(this.isEmpty()){
        throw new Error("List is empty");
    }

    if (index >= this._size){
        throw new Error("Index out of bounds");
    }

    var current = this._head;
    for(var i = 0; i < index; i++){
        current = current.next;
    }

    return current.value;
};

LinkedList.prototype.push_front = function(value){
    var node = this.node();

    node.value = value;
    node.next = this._head;
    
    this._head = node;
    if(this._tail == null){
        this._tail = node;
    }
    
    this._size++;
};

LinkedList.prototype.pop_front = function(){
    if (this.isEmpty()) {
        throw new Error("List is empty");
    }
    
    var value = this._head.value;
    
    // contains only one element
    if(this._head == this._tail){
        this._head = null;
        this._tail = null;
    }
    else {
        this._head = this._head.next;
    }
    
    this._size--;
    
    return value;
};

LinkedList.prototype.push_back = function(value){
    var node = this.node();

    node.value = value;
    node.next = null;
    
    // list is empty
    if(this._head == null){
        this._head = node;						
    }
    else {
        this._tail.next = node;
    }
    this._tail = node;
    
    this._size++;
};

LinkedList.prototype.pop_back = function(){
    if (this.isEmpty()) {
        throw new Error("List is empty");
    }
    
    var value = this._tail.value;
    
    // contains only one element			
    if(this._head == this._tail){
        this._head = null;
        this._tail = null;
    }
    else {
        var previous = this._head;
        while(previous.next != this._tail){
            previous = previous.next;
        }
        
        previous.next = null;
        this._tail = previous;
    }
    
    this._size--;
    
    return value;
};

LinkedList.prototype.front = function(){
    return this._head.value;
};

LinkedList.prototype.back = function(){
    return this._tail.value;
};

LinkedList.prototype.insert = function(index, value){
    if(index == 0){
        this.push_front(value);
    }
    else if(index >= this._size) { 
        this.push_back(value); 
    }
    else {
        var node = this.node();			
        node.value = value;
        
        var current = this._head;
        for (var i = 0; i < index-1; i++){
            current = current.next;
        }
        
        node.next = current.next;
        current.next = node;
        
        this._size++;
    }
};

LinkedList.prototype.erase = function(index){
    if (this.isEmpty()) {
        throw new Error("List is empty");
    }
    if (index >= this._size){
        throw new Error("Index out of bounds");
    }
    
    if(index == 0){
        this.pop_front();
    }
    else if(index == (this._size - 1)) {
        this.pop_back();
    }
    else {
        var current = this._head;
        for (var i = 0; i < index-1; i++){
            current = current.next;
        }
        
        current.next = current.next.next;
        this._size--;
    }
};

LinkedList.prototype.value_n_from_end = function(reverse_index){
    if (this.isEmpty()) {
        throw new Error("List is empty");
    }
    
    var index = this._size - reverse_index;		
    if (index < 0){
        throw new Error("Index out of bounds");
    }
    
    var current = this._head;
    
    for(var i = 0; i < index; i++){
        current = current.next;
    }
    
    return current.value;
};

LinkedList.prototype.reverse = function(){
    if(!this.isEmpty()){
        // contains two elements
        if(this._head.next == this._tail){
            var aux = this._tail;
            this._tail = this._head;
            this._head = aux;
        }
        // contains three or more
        else if(this._head != this._tail){
            var current, successor, aux;
            
            current = this._head;
            successor = this._head.next;
            
            do{
                aux = successor.next;				
                successor.next = current;
                
                current = successor;
                successor = aux;
                
            } while(successor != null);
            
            this._tail = this._head;
            this._head = current;
            this._tail.next = null;
        }
    }
};

LinkedList.prototype.remove_value = function(value){
    var index = 0;
    
    var current = this._head;
    while(current != null && current.value != value){
        current = current.next;
        index++;
    }
    
    if(current != null){
        this.erase(index);
    }
};


module.exports = LinkedList;