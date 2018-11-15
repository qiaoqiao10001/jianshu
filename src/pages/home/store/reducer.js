import {fromJS} from 'immutable'  //把js对象转化为imutable对象


const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'自然科普',
        imgUrl:'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList:[{
        id:1,
        title:'倪妮撞衫赵丽颖，谁气质差谁尴尬，网友：冯绍峰尴尬了',
        desc:'娱乐圈的撞衫可谓是司空见惯的事情，自带招黑体质的杨幂经常跟人撞衫，她曾放言，谁丑谁尴尬，但.',
        imgUrl:'https://upload-images.jianshu.io/upload_images/9584496-b34087a81da94426?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },{
        id:2,
        title:'夫妻之间的尴尬秘密',
        desc:'这天正好是周末，就让老公王勇带她去医院做检查。结果一查，果真是怀孕了。王勇大喜，一路上小心翼翼地护着郭霞，生怕碰到了她肚子里的孩子。' ,
        imgUrl:'https://upload-images.jianshu.io/upload_images/9188841-281091caaa209dab.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }]
});
export default (state=defaultState,action) => {

    switch (action.type) {
        default:
            return state;
    }
}