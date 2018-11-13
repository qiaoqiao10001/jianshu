const defaultState = {
    focused:false
}
export default (state=defaultState,action) => {
    if(action.type === 'focus_input'){
        return {
            focused:true
        }
    }
    if(action.type === 'blur_input'){
        return {
            focused:false
        }
    }
    return state;
}