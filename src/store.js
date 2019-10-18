import { createStore } from 'redux';

const reducer = function (state, action) {
    switch (action.type) {
         case 'tradeData':
            return Object.assign({}, state, {tradeData: action.tradeData});
        case 'update_token':
            return Object.assign({}, state, {loginToken: action.token});
        default:
            return state;
    }
}



const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
