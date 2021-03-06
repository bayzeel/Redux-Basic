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

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log("Search text is", state.searchText);
    document.getElementById("app").innerHTML = state.searchText;
});

console.log("currentState", store.getState());

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "New search text"
});

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Another search text"
});

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: "Brand new search text"
});