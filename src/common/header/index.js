import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrap,SearchInfo,SearchInfoTitle,SearchInfoChange,SearchInfoItem
} from './style'

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
        const {focused,handleInputFocus,handleInputBlur,list} = this.props
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
        focused: state.getIn(['header','focused']),
        //从header 总的reducer里面找focus的值
        //focused: state.get('header').get('focused')
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage'])
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

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);