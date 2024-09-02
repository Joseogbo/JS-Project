let total = document.querySelector('.total');
let tip = document.querySelector('.tip');
let btn = document.querySelector('.btn');
let err = document.querySelector('.error');

function clearErr() {
  setTimeout(() => {
    err.style.display = 'none';
  }, 5000);
}

btn.addEventListener('click', () => {
  let bill = document.getElementById('bill').value;
  let rate = document.getElementById('rate').value;

  if (bill === '' || rate === '') {
    err.style.display = 'block';
    clearErr();
  } else if (isNaN(bill)) {
    err.innerHTML = 'Please enter a valid amount';
    err.style.display = 'block';
    clearErr();
  } else {
    let tipAmount = bill * rate;
    tipAmount = Math.ceil(tipAmount);

    tip.innerHTML = `Tip Amount: ₦${tipAmount}`;
    let totalBill = Number(bill) + tipAmount;

    total.innerHTML = `Total Bill: ₦${totalBill}`;
  }
});
