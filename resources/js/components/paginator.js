import React from 'react'
import PaginationItem from './PaginationItem'


function PaginationPrevious(props) {
    if (props.list.page < 2)
    return '';

    return (
        <PaginationItem context={props.context} content={props.content} list={props.list} />
    )
}

function PaginationNext(props) {
    if (props.list.page >= props.list.lastPage )
    return '';

    return (
        <PaginationItem context={props.context} content={props.content} list={props.list} />
    )
}


class Pagination extends React.Component {
    constructor (props) {
        super (props);
    }

    getPaginationNumbers () {
        let x = [];

        for (var i = 1; i <= this.props.items.lastPage; i++) {
            x.push(i);
        }

        return x;
    }

    getPreviousPage () {
        return this.props.items.page - 1;
    }

    getNextPage () {
        return this.props.items.page + 1;
    }

    render () {
        if (this.props.items.lastPage === 1) {
            return '';
        }

        return (
            <nav>
            <ul className='pagination'>
                <PaginationPrevious context={1} content="First" list={this.props.items} />
                <PaginationPrevious context={this.getPreviousPage()} content="Previous" list={this.props.items} />
                { this.getPaginationNumbers().map(item => (
                    <PaginationItem key={item} context={item} content={item} list={this.props.items} />
                ))}
                <PaginationNext context={this.getNextPage()} content="Next" list={this.props.items} />
                <PaginationNext context={this.props.items.lastPage} content="Last" list={this.props.items} />
            </ul>
            </nav>
        )
    }
}

export default Pagination
