import React,{PureComponent} from 'react'
import {DetailWrap,Header,Content} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Detail extends PureComponent{
    render(){
        const {content,title} = this.props;
        //console.log(this.props.match);
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
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

}

const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }

})

export default connect(mapState,mapDispatch)(Detail)