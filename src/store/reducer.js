import {combineReducers} from 'redux-immutable'  //让生成的数据是immutable数据内容
import {reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers({
    header:headerReducer
})
export default reducer