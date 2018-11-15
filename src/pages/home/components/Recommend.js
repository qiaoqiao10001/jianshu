import React,{Component} from 'react'
import {connect} from 'react-redux'
import {RecommendWraps,RecommendList} from '../style'

class Recommend extends Component{
    render(){
        const {list} = this.props;
        return (
            <RecommendWraps>
                {
                   list.map((item) => {
                       return(
                           <RecommendList key={item.get('id')}>
                               <img className='pic' src={item.get('imgUrl')} alt=""/>
                           </RecommendList>
                       )
                   })
                }

            </RecommendWraps>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        list:state.getIn(['home','recommendList'])
    }
}
export default connect(mapStateToProps,null)(Recommend);