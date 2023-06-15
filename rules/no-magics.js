module.exports = {
  create(context) {
    return {
      Literal(node) {
        if (node.parent.type !== 'ImportDeclaration' && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: `No magic primitives: '${node.raw}'. Refactor into a dedicated constant.`
          });
        }
      },

      ArrayExpression(node) {
        if (!node.elements.length && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: 'No magic empty arrays. Refactor into a dedicated constant.'
          });
        }
      },

      ObjectExpression(node) {
        if (!node.properties.length && !(node.parent.type === 'VariableDeclarator' && node.parent.parent.kind === 'const')) {
          context.report({
            node,
            message: 'No magic empty objects. Refactor into a dedicated constant.'
          });
        }
      }
    };
  }
};
