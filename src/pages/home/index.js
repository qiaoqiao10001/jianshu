import React,{Component} from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {HomeWrap,HomeLeft,HomeRight} from './style'
import {actionCreators} from './store'

class Home extends Component{
    render(){
        return (
            <HomeWrap>
                <HomeLeft>
                    <div style={{height:'400px',width:'640px',overflow:'hidden'}}>
                        <img src="https://upload.jianshu.io/admin_banners/web_images/4574/d5c5ea3e984c8c08071b467c2dfe5bd2d0acf7b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    </div>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrap>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    }
})

export default connect(null,mapDispatchToProps)(Home)