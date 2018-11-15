import {fromJS} from 'immutable'  //把js对象转化为imutable对象


const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'旅行·在路上',
        imgUrl:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
            id:3,
            title:'摄影',
            imgUrl:'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
        ,{
            id:4,
            title:'读书',
            imgUrl:'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },{
            id:5,
            title:'故事',
            imgUrl:'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },{
            id:6,
            title:'自然科普',
            imgUrl:'https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },{
            id:7,
            title:'@IT·互联网',
            imgUrl:'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
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
    }],
    recommendList:[
        {
            id:1,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
        },
        {
            id:2,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
        },
        {
            id:3,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },{
            id:4,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },{
            id:5,
            imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ],
    writerList:[
        {
            id:1,
            imgUrl:'http://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            writerName:'胡七简',
            writerDesc:'写了244.3k字 · 9.6k喜欢'
        },{
            id:2,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            writerName:'三儿王屿',
            writerDesc:'写了227.1k字 · 2.4k喜欢'
        },{
            id:3,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            writerName:'吴小布',
            writerDesc:'写了614.2k字 · 15.5k喜欢'

        },{
            id:4,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            writerName:'宇文欢',
            writerDesc:'写了914.2k字 · 1.5k喜欢'

        },{
            id:5,
            imgUrl:'https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            writerName:'格列柯南',
            writerDesc:' 写了640k字 · 14.9k喜欢'

        }
    ]
});
export default (state=defaultState,action) => {

    switch (action.type) {
        default:
            return state;
    }
}