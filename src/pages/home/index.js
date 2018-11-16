import React,{PureComponent} from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {HomeWrap,HomeLeft,HomeRight,BackTop} from './style'
import {actionCreators} from './store'

class Home extends PureComponent{

    handleScrollTop() {
        window.scroll(0,0)
    }
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
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrap>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvent();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

}

const mapStateToProps = (state) => ({
    showScroll : state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>300){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)