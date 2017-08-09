export default (config, env, helpers) => {
  const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  if (rule) {
    const babelConfig = rule.options;

    babelConfig.plugins.push('transform-flow-strip-types');
  } else {
    throw new Error('Failed to modify babel-loader');
  }
};
