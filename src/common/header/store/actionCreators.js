import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const input_Focus = () => ({
    type:constants.FOCUS_INPUT
})
export const input_Blur = () => ({
    type:constants.BLUR_INPUT
})

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data:fromJS(data)
})

export const getList = () => {   //有了react-thunk之后可以在actionCreators里面写函数
    return (dispatch) => {
        axios.get('/api/headerlist.json').then((res) => {
                const data = res.data;
                //console.log(data);
                dispatch(changeList(data.data))
            }
        ).catch((res) => {

        })
    }
}