import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap
} from './style'

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
        focused: state.header.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            const action = {
                type:'focus_input'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action = {
                type:'blur_input'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);