const counterEl = document.querySelector("#counter");
const incrementEl = document.querySelector("#increment");
const decrementEl = document.querySelector("#decrement");

// initial state of the counter
let counter = 0;

// increment the counter
incrementEl.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
});

// decrement the counter
decrementEl.addEventListener("click", () => {
  counter--;
  counterEl.textContent = counter;
});
