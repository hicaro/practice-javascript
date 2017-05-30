/**
 * Function to print the n first numbers of the fibonacci sequence.
 * @param {*} n 
 */
function fibonacci(n)
{
  var a = 0, b = 1, aux;

  for (var i = 0; i < n; i++) {
    console.log(a);
    aux = a + b; 
    a = b;
    b = aux;
  }
}

fibonacci(10);