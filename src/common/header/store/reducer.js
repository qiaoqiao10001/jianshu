import * as constants from './constants'
import {fromJS} from 'immutable'  //把js对象转化为imutable对象


const defaultState = fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
})
export default (state=defaultState,action) => {
    // if(action.type === constants.FOCUS_INPUT){
    //     //immutable对象的set方法，会结合之前immutable对象的值
    //     //和设置的值，返回一个新的对象
    //     return state.set('focused',true)
    // }
    // if(action.type === constants.BLUR_INPUT){
    //     return state.set('focused',false)
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     console.log(action.data);
    //     return state.set('list',action.data);
    // }
    switch (action.type) {
        case constants.FOCUS_INPUT:
            return state.set('focused',true);
        case constants.BLUR_INPUT:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
            //return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}