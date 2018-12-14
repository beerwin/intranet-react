import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../paginator'
import ItemList from './ItemList'


class articleList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles(this.props.articles);
    }

    updatePage (prevProps) {
        if (prevProps.articles.page !== this.props.articles.page) {
            this.props.getArticles(this.props.articles)
        }
    }

    updateSort(prevProps) {
        if (prevProps.articles.orderBy !== this.props.articles.orderBy || prevProps.articles.order !== this.props.articles.order) {
            this.props.getArticles(this.props.articles)
        }
    }

    componentDidUpdate(prevProps) {
        this.updatePage(prevProps)
        this.updateSort(prevProps)
    }

    render() {
        return (
            <div>
                <Pagination items={this.props.articles} update={this.props.getArticles} />
                <ItemList items={this.props.articles} />
                <Pagination items={this.props.articles} update={this.props.getArticles} />
            </div>
        )
    }
}

articleList.propTypes = {
    articles: PropTypes.shape({
        isLoading: PropTypes.boolean,
        page: PropTypes.number,
        lastPage: PropTypes.number,
        perPage: PropTypes.number,
        total: PropTypes.number,
        orderBy: PropTypes.string,
        order: PropTypes.string,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                category: PropTypes.number.isRequired
            })
        )
    })
}

export default articleList
