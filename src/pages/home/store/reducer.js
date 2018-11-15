import {fromJS} from 'immutable'  //把js对象转化为imutable对象
import * as constants from './constans'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage:1
});
export default (state=defaultState,action) => {

    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return(
                state.merge({
                    topicList:fromJS(action.topicList),
                    articleList:fromJS(action.articleList),
                    recommendList: fromJS(action.recommendList),
                    writerList:fromJS(action.writerList)
                })
            )
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage':action.nextpage
            })
        default:
            return state;
    }
}