export default (config, env, helpers) => {
  const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  if (rule) {
    const babelConfig = rule.options;

    babelConfig.plugins.push('transform-flow-strip-types');
    babelConfig.plugins.push('transform-regenerator');
  } else {
    throw new Error('Failed to modify babel-loader');
  }
};
