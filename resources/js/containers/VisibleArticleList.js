import { connect } from 'react-redux'
import ArticleList from '../components/knowledgebase/ArticleList'
import { requestArticlesAjax } from '../actions/index'

const getVisibleArticles = (articles) => {
    return articles;
}

const mapStateToProps = state => ({
    articles: getVisibleArticles(state.articles)
})

const mapDispatchToProps = dispatch => ({
    getArticles: (params) => {dispatch(requestArticlesAjax(params))}
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ArticleList)
