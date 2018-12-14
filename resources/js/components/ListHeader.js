import React from 'react'
import { connect } from 'react-redux'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'

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
            order = this.props.items.order === 'asc' ? 'desc' : 'asc'
        }
        this.props.dispatch(this.props.sortingCallback(column, order));
    }

    renderArrow () {
        console.log(this.props.columnName, this.props.items.orderBy)
        if (this.props.items.orderBy === this.props.columnName) {
            return this.props.items.order === 'asc' ? (<GoChevronUp />) : (<GoChevronDown />)
        }

        return ''
    }

    render () {
        console.log(this.props.columnName)
        return (
            <th onClick={e => this.sortBy(this.props.columnName)}>{this.props.title}  {this.renderArrow()} </th>
        )
    }
}

export default connect()(ListHeader)
