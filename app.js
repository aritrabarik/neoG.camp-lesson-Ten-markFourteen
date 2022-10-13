// ex03-04: breaking the problem into pieces

var initialPrice = document.querySelector("#initial-price");

var currentPrice = document.querySelector("#current-price");

var stocksQuantity = document.querySelector("#stocks-quantity");

var submitBtn = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

// ex05: create Function for Calculating Loss and Profit

function calculateProfitLoss(initial, quantity, current) {
  if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercent = (profit / initial) * 100;
    outputBox.style.color = "green";
    showOutput(`Profit is: ${profit} and Profit % is ${profitPercent}`);
  } else if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercent = (loss / initial) * 100;
    outputBox.style.color = "red";
    showOutput(`Loss is: ${loss} and Loss % is ${lossPercent}`);
  } else {
    outputBox.style.color = "white";
    showOutput("No pain No gain, and no gain no pain :)");
  }
}

// ex06: adding event listeners

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var crp = Number(currentPrice.value);

  calculateProfitLoss(ip, qty, crp);
}

function showOutput(message) {
  outputBox.innerText = message;
}
