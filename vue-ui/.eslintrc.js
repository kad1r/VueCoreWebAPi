module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "indent": ["warn", 2],
    // "no-unused-vars": [
    //   "warn",
    //   {
    //     "vars": "all",
    //     "args": "none",
    //     "ignoreRestSiblings": false,
    //     "caughtErrors": "none"
    //   }
    // ],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
