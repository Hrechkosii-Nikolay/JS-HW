const inputRef = document.querySelector("#validation-input");
const validLength = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onCheckValid);

function onCheckValid() {
  if (inputRef.value.length !== validLength) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
