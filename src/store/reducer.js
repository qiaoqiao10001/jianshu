import {combineReducers} from 'redux-immutable'  //让生成的数据是immutable数据内容
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
})
export default reducer