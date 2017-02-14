module.exports = {

  "extends" : [
    "airbnb"
  ],
  "plugins": [
    "babel"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
  "indent": [2, "tab"],
  "react/jsx-indent": [2, "tab"],
  "react/jsx-indent-props": [2, "tab"],
  "semi": [2, "always"],
  "no-implicit-coercion": [2, {
    "boolean": true, 
    "number": true, 
    "string": true
    }]
  }
};