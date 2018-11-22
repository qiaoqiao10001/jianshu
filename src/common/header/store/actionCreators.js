import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const input_Focus = () => ({
    type:constants.FOCUS_INPUT
})
export const input_Blur = () => ({
    type:constants.BLUR_INPUT
})
export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
})

export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})

export const ChangePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})
const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
})

export const getList = () => {   //有了react-thunk之后可以在actionCreators里面写函数
    return (dispatch) => {
        axios.get('/api/headerlist').then((res) => {
                const data = res.data;
                //console.log(data);
                dispatch(changeList(data.data))
            }
        ).catch((res) => {
            console.log(res);
        })
    }
}