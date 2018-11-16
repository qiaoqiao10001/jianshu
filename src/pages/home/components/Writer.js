import React,{PureComponent} from 'react'
import {WriterTitle,WriterList,WriterMore} from '../style'
import {connect} from 'react-redux'

class Writer extends PureComponent{
    render(){
        const {list} = this.props
        return (
            <div>
                <WriterTitle>
                    <span className='writer'>推荐作者</span>
                    <span className='change'>换一批</span>
                </WriterTitle>
                {
                    list.map((item) => {
                        return(
                            <WriterList key={item.get('id')}>
                                <div>
                                    <a href='#' className='avatar'>
                                        <img src={item.get('imgUrl')} alt=""/>
                                    </a>
                                    <a className='attention'>
                                        +关注
                                    </a>
                                    <p>
                                        <span className='writerName'>{item.get('writerName')}</span><br/>
                                        <span className='desc'>{item.get('writerDesc')}</span>
                                    </p>
                                </div>
                            </WriterList>
                        )
                    })
                }
                <WriterMore>
                    查看全部 >
                </WriterMore>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        list:state.getIn(['home','writerList'])
    }
}
export default connect(mapStateToProps ,null)(Writer)