import {fromJS} from 'immutable'  //把js对象转化为imutable对象
import * as constants from './constants'

const defaultState = fromJS({
    title:'秋天干燥，多吃这个菜，1周做5回，上桌5分钟连汤汁都不剩',
    content:'<img src="https://upload-images.jianshu.io/upload_images/12684358-3837549a89e7c84b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/900/format/webp"/><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p>'
});



export default (state=defaultState,action) => {

    switch (action.type) {

        default:
            return state;
    }
}
