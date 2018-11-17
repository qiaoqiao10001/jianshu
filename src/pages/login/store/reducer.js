import {fromJS} from 'immutable'  //把js对象转化为imutable对象
import * as constants from './constants'

const defaultState = fromJS({
    login:false
});



export default (state=defaultState,action) => {

    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value);
        case constants.LOG_OUT:
            return state.set('login',action.value);
        default:
            return state;
    }
}
