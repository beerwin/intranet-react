import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { requestSingleArticle } from '../../actions'
import Loader from '../Loader'

class ArticlePage extends React.Component {
    constructor (props) {
        super (props)
    }

    componentDidMount() {
        this.props.getArticle(this.props.match.params.slug);
    }

    render () {
        if (!this.props.articlePage.article) {
            return (
                <div>
                    <h1>Oops!</h1>
                    <p>There are some quirks in our system! The page cannot be displayed</p>
                </div>
            )
        }

        if (this.props.articlePage.isLoading) {
            return <Loader />
        }

        return (
            <div>
                <h1>{this.props.articlePage.article.name}</h1>
                {this.props.articlePage.article.content}
                <hr />
                {this.props.articlePage.article.category.name}
            </div>
        )
    }
}

ArticlePage.propType = {
    isLoading: PropTypes.boolean,
    article: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        content: PropTypes.string,
        category: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    })
}

const mapStateToProps = state => ({
    articlePage: state.articlePage
})

const mapDispatchToProps = dispatch => ({
    getArticle: (params) => {dispatch(requestSingleArticle(params))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ArticlePage)
