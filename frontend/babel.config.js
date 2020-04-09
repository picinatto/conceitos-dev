module.exports = {
  presets: [
    // Add the preset that evaluate each environment
    '@babel/preset-env',
    // Get the preset to convert ReactJS (JSX) to JS
    '@babel/preset-react',
  ],
  plugins: [
    // Add this plugin to use the async and await
    '@babel/transform-runtime',
  ],
};