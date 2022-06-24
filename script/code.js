const numbers = document.getElementById("numbers");
const values = document.getElementById("values");
const nextNo = document.getElementById("next");
numbers.focus();
let arr = [1, 4, 7, 2, 5, 9, 3];

const btnadd = document.getElementById("add");
btnadd.addEventListener("click", () => {
  arr.push(parseInt(numbers.value));
  values.innerHTML = arr;
  numbers.focus();
  numbers.value = "";
});

numbers.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnadd.click();
  }
});

const btnCalc = document.getElementById("calculate");
btnCalc.addEventListener("click", () => {
  const iterator = arr.values();

  let x = iterator.next().value;
  let y = iterator.next().value;
  nextNo.innerHTML += x + '' + y;
});

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", () => {
  numbers.value = "";
  values.innerHTML = "";
  nextNo.innerHTML = "";
  arr = [1, 4, 7, 2, 5, 9, 3];
});
