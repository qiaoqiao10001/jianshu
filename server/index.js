const express = require('express');

const app = express();

app.get('/api/detail',function(req,res){
    res.send({
        "success":true,
        "data":{
            "title":"秋天干燥，多吃这个菜，1周做5回，上桌5分钟连汤汁都不剩",
            "content": "<img src='https://upload-images.jianshu.io/upload_images/12684358-3837549a89e7c84b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/900/format/webp'/><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p><p>虽说秋天才刚到，但已经明显能感觉到秋天的干燥了，这几天每天洗完澡后总是觉得身体紧绷绷的，一天到晚觉得喉咙干，手握保温杯的次数明显增多。</p>"
        }
    });
});

app.get('/api/home',function(req,res){
    res.send({
        "success": true,
        "data": {
            "topicList": [
                {
                    "id":1,
                    "title":"旅行·在路上",
                    "imgUrl":"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                },{
                    "id":2,
                    "title":"手绘",
                    "imgUrl":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                },{
                    "id":3,
                    "title":"摄影",
                    "imgUrl":"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                }
                ,{
                    "id":4,
                    "title":"读书咯",
                    "imgUrl":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                },{
                    "id":5,
                    "title":"故事",
                    "imgUrl":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                },{
                    "id":6,
                    "title":"自然科普",
                    "imgUrl":"https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                },{
                    "id":7,
                    "title":"@IT·互联网",
                    "imgUrl":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
                }
            ],
            "recommendList": [{
                "id": 1,
                "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
            },{
                "id": 2,
                "imgUrl":"http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"

            },{
                "id": 3,
                "imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
            }, {
                "id": 4,
                "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
            },{
                "id": 5,
                "imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
            }],
            "articleList": [{
                "id": 1,
                "title": "胡歌12年后首谈车祸",
                "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
                "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
            }, {
                "id": 2,
                "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
                "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
                "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
            }, {
                "id": 3,
                "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
                "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
                "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
            }, {
                "id": 4,
                "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
                "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
                "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
            }],
            "writerList":[
                {
                    "id":1,
                    "imgUrl":"http://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "writerName":"胡七简",
                    "writerDesc":"写了244.3k字 · 9.6k喜欢"
                },{
                    "id":2,
                    "imgUrl":"https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "writerName":"三儿王屿",
                    "writerDesc":"写了227.1k字 · 2.4k喜欢"
                },{
                    "id":3,
                    "imgUrl":"https://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "writerName":"吴小布",
                    "writerDesc":"写了614.2k字 · 15.5k喜欢"

                },{
                    "id":4,
                    "imgUrl":"https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "writerName":"宇文欢",
                    "writerDesc":"写了914.2k字 · 1.5k喜欢"

                },{
                    "id":5,
                    "imgUrl":"https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
                    "writerName":"格列柯南",
                    "writerDesc":" 写了640k字 · 14.9k喜欢"

                }]
        }
    })
})

app.get('/api/headerlist',function(req,res){
    res.send({
        "success":true,
        "data":["行距杯2018征文","express","区块链","小程序","vue","毕业","PHP","react","vuex","redux","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
    })
})

app.get('/api/homeList',function(req,res){
    res.send({
        "success": true,
        "data": [{
            "id": 5,
            "title": "胡歌12年后首谈车祸",
            "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
            "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            "id": 6,
            "title": "胡来了，就不能白白活着",
            "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
            "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            "id": 7,
            "title": "胡歌既然活下来了，就不能白白活着",
            "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
            "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            "id": 8,
            "title": "胡歌就不能白白活着",
            "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
            "imgUrl": "//upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
        }]
    })
})

app.get('/api/login',function(req,res){
    res.send({
        "success":true,
        "data":true
    })
})

app.listen('8089',function(){
    console.log('express is listen on 8089')
})