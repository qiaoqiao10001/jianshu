import axios from 'axios'
import * as constants from './constants'

const changeDetail = (title,content) => ({
    type:constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {  // redux-thunk
        axios.get('/api/detail?id='+id).then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(changeDetail(result.title,result.content));
        })
    }
}
