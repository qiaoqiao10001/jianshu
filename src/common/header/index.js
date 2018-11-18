import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {actionCreators as logoutActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap,SearchInfo,SearchInfoTitle,SearchInfoChange,SearchInfoItem
} from './style'
import { Link } from 'react-router-dom';

class Header extends React.Component{

    getListArea = () => {
        const {focused,list,page,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage} = this.props;
        const newList = list.toJS();
        const pageList = []
        if(newList.length){
            for(let i = (page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoChange onClick={() => handleChangePage(page,totalPage)}>换一批</SearchInfoChange>
                    <div>
                        {
                            // list.map((item) => {
                            //     return  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            // })
                            pageList
                        }
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout} = this.props
        return(
                <HeaderWrapper>

                        <Link to='/'>
                            <Logo/>
                        </Link>

                    <Nav>
                        <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
                        <NavItem className = 'left'>下载App</NavItem>
                        {
                            login ? <NavItem className = 'right' onClick={logout}> 退出 </NavItem>
                                :  <Link to='/login'><NavItem className = 'right'> 登录 </NavItem></Link>
                        }

                        < NavItem className = 'right' >
                            < i className = "iconfont" >&#xe636;</i>
                        </NavItem >
                        <SearchWrap>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focused? 'focused' : '' }
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition>
                            <i className = {
                                focused ? 'focused iconfont' : 'iconfont'} > &#xe63d; </i>
                            {this.getListArea()}
                        </SearchWrap>
                    </Nav>
                    <Addition>
                        <Link to='/write'>

                        <Button className = 'writting'>
                            < i className = "iconfont" >&#xe632; </i>
                            写文章</Button>
                        </Link>
                        <Button className='reg'>注册</Button>


                    </Addition>
                </HeaderWrapper>
            )
    }

}

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header','focused']),
        //从header 总的reducer里面找focus的值
        //focused: state.get('header').get('focused')
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputFocus(list){
            //console.log(list)
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.input_Focus())

        },
        handleInputBlur(){
            dispatch(actionCreators.input_Blur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage){
            console.log(page,totalPage)
            if(page<totalPage){
                dispatch(actionCreators.ChangePage(page+1))
            }else{
                dispatch(actionCreators.ChangePage(1))
            }

        },
        logout(){
            dispatch(logoutActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);