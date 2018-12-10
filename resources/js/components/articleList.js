import React from 'react'
import PropTypes from 'prop-types'
import Article from './article'

const articleList = ({articles}) => (
    <ul>
        {articles.map(article => (
            <Article key={article.slug} {...article} />
        ))}
    </ul>
)

articleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            category: PropTypes.number.isRequired
        })
    )
}

export default articleList
