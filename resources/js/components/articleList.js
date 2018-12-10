import React from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import Loader from './loader'

function itemList (articles) {
    if (articles.isLoading) {
        return <Loader />
    }

    return (<ul>
        {articles.data.map(article => (
            <Article key={article.slug} {...article} />
        ))}
    </ul>)
}

class articleList extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        return itemList(this.props.articles)
    }
}

articleList.propTypes = {
    articles: PropTypes.shape({
        isLoading: PropTypes.boolean,
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
