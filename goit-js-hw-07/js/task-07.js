const refs = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

refs.inputRef.addEventListener("input", onChangeText);

function onChangeText() {
  refs.textRef.style.fontSize = refs.inputRef.value + "px";
  refs.textRef.style.color = onGetRandomColor();
}

// custom function
function onGetRandomColor() {
  let color = [
    113 - refs.inputRef.value - Math.floor(Math.random() * 15),
    221 - refs.inputRef.value + Math.floor(Math.random() * 25),
    230 - refs.inputRef.value - Math.floor(Math.random() * 35),
  ];
  return "rgb(" + color.join(", ") + ")";
}
