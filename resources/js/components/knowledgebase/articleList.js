import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Pagination'
import ItemList from './ItemList'


class ArticleList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles({
            orderBy: this.props.articles.orderBy,
            order: this.props.articles.order,
            page: this.props.articles.page
        })
    }

    render() {
        return (
            <div>
                <Pagination items={this.props.articles} />
                <ItemList items={this.props.articles} />
                <Pagination items={this.props.articles} />
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

export default ArticleList
