const refs = {
  countValue: document.querySelector("#value"),
  btnIncrementRef: document.querySelector('[data-action="increment"]'),
  btnDecrementRef: document.querySelector('[data-action="decrement"]'),
};
let counterValue = 0;

function increment() {
  counterValue += 1;
  refs.countValue.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.countValue.textContent = counterValue;
}

refs.btnIncrementRef.addEventListener("click", increment);
refs.btnDecrementRef.addEventListener("click", decrement);
