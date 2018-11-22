import axios from 'axios'
import * as constants from './constans'
import {fromJS} from 'immutable'
const changeHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList:result.recommendList,
    articleList:result.articleList,
    writerList:result.writerList
})

const addHomeList = (list,nextpage) => ({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextpage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList?='+page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page+1))
        })
    }
}
export const toggleTopShow = (show) => ({
    type:constants.TOGGLE_TOP_SHOW,
    show
})