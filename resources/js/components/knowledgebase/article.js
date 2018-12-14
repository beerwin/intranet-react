import React from 'react'
import PropTypes from 'prop-types'

const Article = ({name, slug, content, category}) => (
    <tr>
        <td>{name}</td>
        <td>{category}</td>
    </tr>
)

Article.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired
}

export default Article