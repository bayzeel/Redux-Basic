var redux = require("redux");

console.log("Starting todo redux example");

var defaulState = {
    searchText: "",
    showCompleted: false,
    todos: []
};
var reducer = (state = defaulState, action) => {
    switch(action.type){
        case "CHANGE_SEARCH_TEXT":
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log("currentState", currentState);

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "New search text"
});

console.log("searchText should be 'New search test'", store.getState());