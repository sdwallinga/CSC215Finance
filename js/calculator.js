// calculator.js, written by Sam Wallinga for CSC215, Winter 2014

// get a list of all span tags in the calculator div
var keys = document.querySelectorAll('#calculator span');

// assign event handlers to all keys
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.getElementById('screen').innerHTML;
    var btnVal = this.innerHTML;

    //when CLEAR is pressed, reset the display
    if(btnVal == 'CLR') {
      document.getElementById('screen').innerHTML = '';
      decimalAdded = false;
    }

    // when eval is pressed, evaluate the expression
    else if(btnVal == '=') {
      document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
    }

    // otherwise, append the number or expression
    else {
      document.getElementById('screen').innerHTML += btnVal;
    }
  }
}