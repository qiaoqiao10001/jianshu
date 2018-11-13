import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap,SearchInfo,SearchInfoTitle,SearchInfoChange,SearchInfoItem
} from './style'

const getListArea = (show) => {
    if(show){
        return(
            <SearchInfo>
                <SearchInfoTitle>热门搜索</SearchInfoTitle>
                <SearchInfoChange>换一批</SearchInfoChange>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>生活</SearchInfoItem>
                    <SearchInfoItem>科技</SearchInfoItem>
                </div>
            </SearchInfo>
        )
    }else{
        return null
    }
}

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className = 'left'>下载App</NavItem>
                <NavItem className = 'right'> 登录 </NavItem>
                < NavItem className = 'right' >
                    < i className = "iconfont" >&#xe636;</i>
                </NavItem >
                <SearchWrap>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused? 'focused' : '' }
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <i className = {
                        props.focused ? 'focused iconfont' : 'iconfont'} > &#xe63d; </i>
                    {getListArea(props.focused)}
                </SearchWrap>
            </Nav>
            <Addition>
                <Button className = 'writting'>
                    < i className = "iconfont" >&#xe632; </i>
                    写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header','focused'])
        //从header 总的reducer里面找focus的值
        //focused: state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            //const action = actionCreators.
            dispatch(actionCreators.input_Focus())
        },
        handleInputBlur(){
            // const action = {
            //     type:'blur_input'
            // }
            dispatch(actionCreators.input_Blur())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);