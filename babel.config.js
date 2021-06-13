module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        root: ["."],
      },
    ],
  ],
};
