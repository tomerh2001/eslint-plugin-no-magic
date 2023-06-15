module.exports = {
  create(context) {
    return {
      Literal(node) {
        context.report({
          node,
          message: 'No magics allowed! Found a primitive.'
        });
      },

      ArrayExpression(node) {
        if (!node.elements.length) {
          context.report({
            node,
            message: 'No magics allowed! Found an empty array.'
          });
        }
      },

      ObjectExpression(node) {
        if (!node.properties.length) {
          context.report({
            node,
            message: 'No magics allowed! Found an empty object.'
          });
        }
      }
    };
  }
};
