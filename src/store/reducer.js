const defaultState = {
    focused:false
}
export default (state=defaultState,action) => {
    if(action.type === 'focus_input'){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = true;
        // return newState;
        return {
            focused:true
        }
    }
    if(action.type === 'blur_input'){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = false;
        // return newState;
        return {
            focused:false
        }
    }
    return state;
}