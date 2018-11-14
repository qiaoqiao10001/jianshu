import React,{Component} from 'react'
import {HomeWrap,HomeLeft,HomeRight} from './style'

export default class Home extends Component{
    render(){
        return (
            <HomeWrap>
                <HomeLeft>
                    <img src="https://upload.jianshu.io/admin_banners/web_images/4574/d5c5ea3e984c8c08071b467c2dfe5bd2d0acf7b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrap>
        )
    }
}