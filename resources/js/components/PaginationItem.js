import React from 'react'
import { connect } from 'react-redux'
import { requestArticlesAjax } from '../actions'

class PaginationItem extends React.Component {

    constructor(props) {
        super(props)
    }

    getClassName() {
        let className = 'page-item'
        if (this.props.list.page === this.props.context) {
            className = className + ' active'
        }
        return className
    }

    render() {
        return (
            <li className={this.getClassName()}>
                <a href="#" className='page-link' onClick={e => {
                    e.preventDefault()
                    this.props.getArticles(
                        {
                            orderBy: this.props.list.orderBy,
                            order: this.props.list.order,
                            page: this.props.context
                        }
                    )
                }}>{this.props.content}</a>
            </li>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => ({
    getArticles: (params) => {dispatch(requestArticlesAjax(params))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationItem)
