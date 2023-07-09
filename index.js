let result = document.getElementById("result");

window.onload = function () {
  result.focus();
};

let defaultValue = "";
result.value = defaultValue;

function moveCursorToEnd(event) {
  //move cursor to the end of the number in the input
  result.selectionStart = result.selectionEnd = result.value.length;
}
result.addEventListener("click", moveCursorToEnd);
result.addEventListener("focus", moveCursorToEnd);

//toggle slide by click the numbers
function toggle(button) {
  const tggl = document.getElementById("togglebtn");
  const themeSwitch = document.getElementById("themeSwitch");
  var x = button.id;
  switch (x) {
    case "tggl_1":
      tggl.style.marginInlineStart = "0rem";
      themeSwitch.className = "theme1";
      break;

    case "tggl_2":
      tggl.style.marginInlineStart = "1rem";
      themeSwitch.className = "theme2";
      break;

    case "tggl_3":
      tggl.style.marginInlineStart = "2rem";
      themeSwitch.className = "theme3";
      break;
    default:
      return false;
  }
}

//Append the number in input result box
function appendNumber(number) {
  result.value += number;
}

//Append the operators in input result box
function apopendOperator(operator) {
  result.value += operator;
}

//Delete the last value
function deleteLastValue() {
    result.value = result.value.slice("0", -1);
}

//clear all the value
function clearResult() {
  result.value = "";
}

//Evaluate number and operator and show the value in the result box
function calculateAllResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = alert("Invalid Input!!");
    result.value = "";
  }
}

// Function for keypress interface
result.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateAllResult();
  }
  if (event.key === "Escape") {
    clearResult();
  }
});
