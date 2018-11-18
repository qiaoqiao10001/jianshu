import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {LoginWrap,LoginBox,Input,Button} from './style.js'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrap>
                    <LoginBox>
                        <Input placeholder='账户' ref={(input) => {this.accout = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.accout,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrap>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
})

export default connect(mapState,mapDispatch)(Login)