let inputButton = document.getElementById("calculateInterest");
  inputButton.addEventListener("click", getInterest);

// function calculateInterest() {

//   console.log("Calculating interest...");

//   let inputButton = document.getElementById("calculateInterest");
//   inputButton.addEventListener("click", getInterest);
  
// }

function getInterest() {
  //console.log("in getInteest ");
  let inputAmount = parseFloat(document.getElementById("fullPrinciple").value);
  inputAmount = inputAmount.toFixed(2);
  let inputRate = parseFloat(document.getElementById("interestRate").value);
  let inputYears = parseFloat(document.getElementById("totalYears").value);

  //console.log("inputAmount: ", inputAmount);

  inputRate = inputRate / 100;

  let finalInterest = inputAmount* (inputRate * inputYears + 1);
  finalInterest = finalInterest.toFixed(2);
  
  let finalAmount = finalInterest;
  finalInterest = finalInterest - inputAmount;
  finalInterest = finalInterest.toFixed(2);

  // console.log("inputRate: ", inputRate);
  // console.log("inputYears: ", inputYears);
  // console.log("finalInterest (before subtracting principle): ", inputRate);
  // console.log("finalInterest: ", finalInterest);
  // console.log("finalAmount: ", finalAmount);

  document.getElementById("enteredPrinciple").textContent = `Entered Principle: $${inputAmount}`;
  document.getElementById("enteredRate").textContent = `Entered Interest: ${inputRate}`;
  document.getElementById("enteredYears").textContent = `Entered Years: ${inputYears}`; 
  document.getElementById("totalInterest").textContent = `Total Interest: $${finalInterest}`;
  document.getElementById("totalAmount").textContent = `Total Amount: $${finalAmount}`;
  document.getElementById("finalParagraph").textContent = `Summary: You entered $${inputAmount} at ${inputRate} for ${inputYears} years. The total interest earned is $${finalInterest} and the total amount after interest is $${finalAmount}.`;

};

//getInterest();
// This function is called when the page loads to initialize the interest calculation
