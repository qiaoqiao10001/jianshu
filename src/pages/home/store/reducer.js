import {fromJS} from 'immutable'  //把js对象转化为imutable对象
import * as constants from './constans'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage:1,
    showScroll:false
});

const homeDataChange = (state,action) => {  //把action中处理数据单独提出来
    return (
        state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList:fromJS(action.writerList)
    })
    )
}

const addArticleList = (state,action) => {
    return(
        state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage':action.nextpage
        })
    )
}

export default (state=defaultState,action) => {

    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return homeDataChange(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}
