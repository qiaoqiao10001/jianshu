import styled from 'styled-components'
import logopic from '../../static/img/logo.png'

export const HeaderWrapper = styled.div`
    height:58px;    
    width:100%;
    position:relative;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href:'/'
})`
    display:block;
    height:56px;
    width:100px;
    position:absolute;
    top:0;left:0;
    background:url(${logopic});
    background-size:contain;
`;
export const Nav = styled.div `
    height:100%;
    width: 960px ;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`;
export const NavItem = styled.div `
    line-height:56px;
    padding:0 15px;
    color: #333;
    font-size:17px;
    &.left{
        float:left;
    }

    &.right{
        float:right
        color:#969696
    }
    &.active{
        color:#ea6f5a;
    }
    
`;
export const SearchWrap = styled.div `
   position:relative;
   float:left;
   
   .iconfont{
       position:absolute;
        right:24px;
        bottom:13px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
   }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:60px;
    width:240px;
    height:100px;
    padding:20px;
    background:#ffffff;
    box-shadow:0 0 8px rgba(0,0,0,.2)
    
`;

export const SearchInfoTitle = styled.span`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
    
`;

export const SearchInfoChange = styled.span`
     float:right;
    color:#ccc;
`;

export const SearchInfoItem = styled.a`
     float:left;
     font-size:12px;
     line-height:20px;
     border:1px solid #ddd;
     border-radius:3px;
     padding:0 3px;
      color:#787878;margin:10px 10px;
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin:9px 20px 9px 20px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    } 
    &.slide-enter-active {
        width: 240px;
    } 
    &.slide-exit {
        transition: all .2s ease-out;
    } 
    &.slide-exit-active {
        width: 160px;
    }
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div `
   float:right;
   margin-top:9px;
   margin-right:20px
   line-height:38px;
   padding:0 20px;
   border-radius:19px;
   
   border:1px solid #ec6149;
   &.reg{
       color: #ec6149
   }
   &.writting{
       color:#fff;
       background: #ec6149;
   }
`;


