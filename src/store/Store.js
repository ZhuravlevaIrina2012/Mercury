import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/Reducer";

const initialState = {
    sideMenu: true,
    typeMenu: 'fullScreen'
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;