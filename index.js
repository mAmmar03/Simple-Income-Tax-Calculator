function startTexCalculation() {
  let isSalaried = confirm("Are You Salaried? Click OK for yes, Cancel for NO");
  if (!isSalaried) {
    alert("This Calculator Currently Support Salaried Individuals.");
    return;
  }
  let incomeinput = prompt("Enter Your Annual Incom In PKR:");
  let income = parseFloat(incomeinput);

  if (isNaN(income) || income < 0) {
    alert("Please Enter a Valid INcom Amount.");
    return;
  }
  let tax = 0;

  if (income <= 600000) {
    tax = 0;
  } else if (income <= 1200000) {
    tax = (income - 600000) * 2.5/100;
  } else if (income <= 2400000) {
    tax = (income - 600000) * 2.5/100;
  } else if (income <= 3600000) {
    tax = (income - 600000) * 2.5/100;
  } else {
    tax = (income - 600000) * 2.5/100;
  }
  alert(`Your Income Tax in PKR ${tax.toFixed(0)}`);
}
