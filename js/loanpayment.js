/* Loan Repayment Calculator, written by Sam Wallinga for CSC215, Winter 2014 */

var maxTerms = [30, 10, 25];
var maxLoanAmts = [500000, 15000000, 1500000];
var rateModifiers = [0.03, 0.02, 0.015];

document.getElementById('calcbutton').onclick = function(e) {
  e.preventDefault();

  // Read all user-entered data.
  var loanAmt = document.getElementById('amttext').value;
  var primeRate = parseFloat((document.getElementById('ratetext').value) / 100.0);
  var loanType = document.getElementById('loantypeselect').value;
  var loanTerm = document.getElementById('durationtext').value;
  var payFreq = document.querySelector('input[name="freqradios"]:checked').value;

  //debug
  alert('loan amount: ' + loanAmt + '\nprime rate: ' + primeRate + '\nloanType: ' + loanType + '\nloanTerm: ' + loanTerm + '\npayFreq: ' + payFreq);

  // Number of payments a borrower will make: term * frequency
  var nbrPayments = loanTerm * payFreq;
  alert('nbr payments: ' + nbrPayments);

  // period rate: prime plus type modifier
  var periodRate = primeRate + rateModifiers[loanType];

  // Does the user get a discount for less than half of max term length?
  if(loanTerm < ((maxTerms[loanType]) / 2)) {
    periodRate = periodRate - 0.005;
  }
  periodRate = periodRate / payFreq;
  alert('period rate: ' + periodRate);

  // Annual interest divided by 100, then divided by either 12 or 26 based on payment scheme
  var periodInterest = ((loanAmt / 100)/12);
  alert(periodInterest);

  var nP = nbrPayments * -1;

  var payment = (loanAmt * periodRate) / (1 - Math.pow(1 + periodRate, nP));

  document.getElementById('paymentlabel').value = "$" + payment.toFixed(2);

}


