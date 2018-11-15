import styled from 'styled-components'

export const HomeWrap = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
    
`

export const HomeLeft = styled.div`
    width:625px;
    margin-top:30px;
    overflow:hidden;
    float:left;
`

export const HomeRight = styled.div`
    width:240px;
    float:right;
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    padding-right:10px;
    margin-left:18px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #bcbcbc;
    border-radius:4px;
    margin-bottom:18px;
    .topic_pic{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
       
`

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        float:right;
        height:100px;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
  
`