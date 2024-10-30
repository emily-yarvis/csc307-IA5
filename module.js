function sum(a, b) {
    return a + b;
  }

  function div (a, b){
    return a / b;
  }
  
  function containsNumbers(text){//found error an empty space char is counted as a 0 by javascript
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)))
      return true;
    }
    return false;
  }

  module.exports = { sum, div, containsNumbers };
