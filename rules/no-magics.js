module.exports = {
  create(context) {
    return {
      Literal(node) {
        // Check if the parent node is an import statement
        if (node.parent.type !== 'ImportDeclaration') {
          context.report({
            node,
            message: `No magics: ${node.raw}. Refactor into a dedicated constant.`
          });
        }
      },

      ArrayExpression(node) {
        if (!node.elements.length) {
          context.report({
            node,
            message: 'No magics. Refactor into a dedicated constant.'
          });
        }
      },

      ObjectExpression(node) {
        if (!node.properties.length) {
          context.report({
            node,
            message: 'No magics. Refactor into a dedicated constant.'
          });
        }
      }
    };
  }
};
