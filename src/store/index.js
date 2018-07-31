const { createStore } = require('redux');

const reducer = require('../reducer');

let store = createStore(reducer);

module.exports = store
