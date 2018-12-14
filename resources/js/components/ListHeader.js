import React from 'react'
import { connect } from 'react-redux'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import { requestArticlesAjax, sortArticles } from '../actions'

class ListHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    sortBy(column) {
        if (!this.props.sortable) {
            return
        }

        let order = 'asc';
        if (column === this.props.items.orderBy) {
            console.log(column, this.props.items.orderBy, this.props.items.order)
            order = this.props.items.order === 'asc' ? 'desc' : 'asc'
        }

        let params = {
            orderBy: column,
            order: order,
            page: this.props.items.page
        }

        setTimeout((
            this.props.getArticles(params)
        ),100)

    }

    renderArrow () {
        if (this.props.items.orderBy === this.props.columnName) {
            return this.props.items.order === 'asc' ? (<GoChevronUp />) : (<GoChevronDown />)
        }

        return ''
    }

    render () {
        return (
            <th onClick={e => this.sortBy(this.props.columnName)}>{this.props.title}  {this.renderArrow()} </th>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticles: (params) => { dispatch(requestArticlesAjax(params)) },
        sortArticles: (column, order) => { dispatch(sortArticles, column, order) }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListHeader)
