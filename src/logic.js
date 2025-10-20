// Define globally so app.js can access it
function calculate(expression) {
  if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
    throw new Error("Invalid input");
  }
  // eslint-disable-next-line no-eval
  return eval(expression);
}

// Expose globally (for browsers that isolate scope)
window.calculate = calculate;