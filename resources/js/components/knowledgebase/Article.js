import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { requestSingleArticle } from '../../actions'

class Article extends React.Component {
    constructor (props) {
        super (props)
    }

    render() {
        let link = '/app/articles/' + this.props.slug

        return (
            <tr>
                <td>
                    <Link to={link} onClick={e => {this.props.getArticle(this.props.slug)}}>{this.props.name}</Link>
                </td>
                <td>{this.props.category}</td>
                <td>
                    <Link to=''>Edit</Link>
                </td>
            </tr>
        )
    }

}

Article.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => ({
    getArticle: (params) => {dispatch(requestSingleArticle(params))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)
