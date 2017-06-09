var array = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function binary_search(array, value){
    var min = 0, max = array.length - 1; 
    
    while(max >= min){ 
        var middle = Math.floor((max + min) / 2); 
        
        if(array[middle] == value){
            return middle;
        }
        else if(array[middle] > value){
            max = middle - 1;
        }
        else{
            min = middle + 1;
        }
    }
    
    return -1;
}

function binary_search_recursive(array, value, min, max){
    if(min > max){
        return -1;
    }
    var middle = Math.floor((max + min) / 2);
    if(array[middle] == value){
        return middle;
    }
    else if(array[middle] > value){
        return binary_search_recursive(array, value, min, middle - 1);
    }
    else{
        return binary_search_recursive(array, value, middle + 1, max);
    }
}

function testNotFound(){
    assert(binary_search(array, 99) == -1);
}

function testFindStart(){
    assert(binary_search(array, 1) == 0);
}

function testFindMiddle(){
    assert(binary_search(array, 13) == 5);
}

function testFindEnd(){
    assert(binary_search(array, 89) == 9);
}

function testNotFoundRecursive(){
    assert(binary_search_recursive(array, 99, 0, 9) == -1);
}

function testFindStartRecursive(){
    assert(binary_search_recursive(array, 1, 0, 9) == 0);
}

function testFindMiddleRecursive(){
    assert(binary_search_recursive(array, 13, 0, 9) == 5);
}

function testFindEndRecursive(){
    assert(binary_search_recursive(array, 89, 0, 9) == 9);
}

testNotFound();
testFindStart();
testFindMiddle();
testFindEnd();
testNotFoundRecursive();
testFindStartRecursive();
testFindMiddleRecursive();
testFindEndRecursive();
