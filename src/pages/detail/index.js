import React,{Component} from 'react'
import {DetailWrap,Header,Content} from './style'
import {connect} from 'react-redux'

class Detail extends Component{
    render(){
        const {content,title} = this.props;
        return (
            <DetailWrap>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{ __html: content}}>
                </Content>
            </DetailWrap>
        )
    }
}

const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})


export default connect(mapState,null)(Detail)