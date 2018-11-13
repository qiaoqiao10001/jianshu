import * as constants from './constants'
import {fromJS} from 'immutable'  //把js对象转化为imutable对象


const defaultState = fromJS({
    focused:false
})
export default (state=defaultState,action) => {
    if(action.type === constants.FOCUS_INPUT){
        return state.set('focused',true)
        // {
        //     focused:true
        // }
    }
    if(action.type === constants.BLUR_INPUT){
        return state.set('focused',false)
        // return {
        //     focused:false
        // }
    }
    return state;
}