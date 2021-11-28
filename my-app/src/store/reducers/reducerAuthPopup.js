import AuthPopup from '../actions/AuthPopup';
import initialState from '../initialState';

export default function value_1(state = initialState.value_1, action) {
    switch(action.type) {
        case AuthPopup: return action.value_1;
        
        default: return state;
    }
}