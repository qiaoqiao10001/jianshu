import * as constants from './constants'

const defaultState = {
    focused:false
}
export default (state=defaultState,action) => {
    if(action.type === constants.FOCUS_INPUT){
        return {
            focused:true
        }
    }
    if(action.type === constants.BLUR_INPUT){
        return {
            focused:false
        }
    }
    return state;
}