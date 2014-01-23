// calculator.js, written by Sam Wallinga for CSC215, Winter 2014

// get a list of all span tags in the calculator div
var keys = document.querySelectorAll('#calculator span');
var hasDecimal = false;
var lastOp = false;
var re = /[\+\-\*\/]$/;

// assign event handlers to all keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var keyVal = this.innerHTML;

    //when CLEAR is pressed, reset the display
    if(keyVal == 'CLR') {
      document.getElementById('screen').innerHTML = '';
      hasDecimal = false;
    }
    // when eval is pressed, evaluate the expression
    else if(keyVal == '=') {
      document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
    }
    // otherwise, append the number or expression
    else {
      // Users shall not add two decimal points! Handle.
      if(keyVal == '.' && hasDecimal == false){
        hasDecimal = true;
        document.getElementById('screen').innerHTML += keyVal;
      }
      else if(keyVal == '.' && hasDecimal == true) {
        document.getElementById('screen').innerHTML += '';
      }
      // Users shall not add two operands consecutively! Handle! (warning: ugly)
      else if(re.test(document.getElementById('screen').innerHTML)) {
        if(re.test(keyVal)) {
          document.getElementById('screen').innerHTML += '';
        }
        else {
          document.getElementById('screen').innerHTML += keyVal;
        }
      }
      else {
        document.getElementById('screen').innerHTML += keyVal;
      }
    }
  }
}

