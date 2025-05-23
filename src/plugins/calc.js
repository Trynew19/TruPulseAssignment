export const calcPlugin = {
  async execute(expression) {
    try {
      // Note: eval is used here only for demo; use a safe parser in production
      const result = Function(`"use strict"; return (${expression})`)();
      return { expression, result };
    } catch (e) {
      return { error: 'Invalid mathematical expression.' };
    }
  }
};