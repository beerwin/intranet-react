import { connect } from 'react-redux'
import ArticleList from '../components/knowledgebase/ArticleList'
import { requestArticlesAjax, requestArticle } from '../actions/index'

const getVisibleArticles = (articles) => {
    return articles;
}

const mapStateToProps = state => ({
    articles: getVisibleArticles(state.articles)
})

const mapDispatchToProps = dispatch => ({
    getArticles: (params) => {dispatch(requestArticlesAjax(params))},
    getArticle: (params) => {dispatch(requestArticle(params))}
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ArticleList)
