module.exports = {
  create(context) {
    return {
      Literal(node) {
        if (node.parent.type !== 'ImportDeclaration' && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: `No magics. Refactor into a dedicated constant.`
          });
        }
      },

      ArrayExpression(node) {
        if (!node.elements.length && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: 'No magics. Refactor into a dedicated constant.'
          });
        }
      },

      ObjectExpression(node) {
        if (!node.properties.length && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: 'No magics. Refactor into a dedicated constant.'
          });
        }
      }
    };
  }
};
