var redux = require("redux");

console.log("Starting todo redux example");

var defaulState = {
    searchText: "",
    showCompleted: false,
    todos: []
};
var reducer = (state = defaulState, action) => {
    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("currentState", currentState);