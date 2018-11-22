import axios from 'axios'
//import {CHANGE_LOGIN} from './constants'
import * as constants from './constants'
const changeLogin = () => ({
    type:constants.CHANGE_LOGIN,
    value:true
})

export const logout = () => ({
    type:constants.LOG_OUT,
    value:false
})

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login?account='+account+'&password='+password).then((res) => {
            const result = res.data.success;
            if(result){
                //如果登录成功，把store里面的数据从false改为true

                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
}