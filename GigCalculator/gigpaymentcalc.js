//Calculate Payout
function calculateBread() {
  var gigPayment = document.getElementById("venue").value;
  var tipAmt = document.getElementById("tipAmt").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validate input
  if (gigPayment == 0) {
    alert("Please choose a venue!");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  if (tipAmt <= 0 || tipAmt == "") {
    tipAmt = 0;
  }

  //Calculate payment amount
  var total = (Number(gigPayment) + Number(tipAmt)) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalPayment").style.display = "block";
  document.getElementById("payment").innerHTML = total;

};

//Hide the payment amount on load
document.getElementById("totalPayment").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateBread();

};