function evaluateExpression(expression) {
  try {
    // Basic validation: only allow numbers and operators
    if (!/^[\d+\-*/().\s]+$/.test(expression)) {
      throw new Error('Invalid characters in expression');
    }
    // Safe eval alternative: use Function constructor
    const result = Function(`return ${expression}`)();
    return result;
  } catch (error) {
    return 'Error';
  }
}

module.exports = { evaluateExpression };