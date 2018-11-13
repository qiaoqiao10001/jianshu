import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap,SearchInfo,SearchInfoTitle,SearchInfoChange,SearchInfoItem
} from './style'

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    getListArea = () => {
        if(this.props.focused){
            return(
                <SearchInfo>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoChange>换一批</SearchInfoChange>
                    <div>

                        {
                            this.props.list.map((item) => {
                                return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

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
                            {this.getListArea()}
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
    console.log(state,'1111111111111state');
    return{
        focused: state.getIn(['header','focused']),
        //从header 总的reducer里面找focus的值
        //focused: state.get('header').get('focused')
        list:state.getIn(['header','list'])

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(){
            dispatch(actionCreators.input_Focus())
            dispatch(actionCreators.getList())
        },
        handleInputBlur(){
            dispatch(actionCreators.input_Blur())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);