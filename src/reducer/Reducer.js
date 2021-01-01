import {TOGGLE_SIDEBAR} from "../actions/Actions";

function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {...action.payload};
        default:
            return state;
    }
}

export default reducer;