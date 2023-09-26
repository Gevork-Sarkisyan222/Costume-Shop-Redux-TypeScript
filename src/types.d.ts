declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
