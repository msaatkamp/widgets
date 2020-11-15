module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 7,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
        "import/prefer-default-export": "off",
        "skipBlankLines": 0,
        "ignoreComments": 0,
        "react/prop-types": 0
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
