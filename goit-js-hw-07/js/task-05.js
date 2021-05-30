const input = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

input.addEventListener("input", onCreateName);

function onCreateName(el) {
  nameRef.textContent = el.target.value;
  if (nameRef.textContent !== "") {
    input.classList.remove("invalid"); // custom class
  } else {
    input.classList.add("invalid"); // custom class
    nameRef.textContent = "незнакомец!";
  }
}
