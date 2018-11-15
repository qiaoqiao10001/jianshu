import {fromJS} from 'immutable'  //把js对象转化为imutable对象
import * as constants from './constans'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[]
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

        default:
            return state;
    }
}