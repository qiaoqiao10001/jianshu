import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap
} from './style'


class Header extends Component{

    render(){
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
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                        <NavSearch
                            className={this.props.focused? 'focused' : '' }
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        />
                        </CSSTransition>
                            <i className = {
                                this.props.focused ? 'focused iconfont' : 'iconfont'} > &#xe63d; </i>
                        
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
}

const mapStateToProps = (state) => {
    return{
        focused: state.focused
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