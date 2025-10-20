// Wait until the DOM is ready before attaching listeners
document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "C") {
        currentInput = "";
        display.value = "";
      } else if (value === "=") {
        try {
          display.value = calculate(currentInput);
          currentInput = display.value;
        } catch (e) {
          display.value = "Error";
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });
});
