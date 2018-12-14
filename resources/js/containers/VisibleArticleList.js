import { connect } from 'react-redux'
import articleList from '../components/knowledgebase/articleList'
import { requestArticlesAjax } from '../actions/index'

const getVisibleArticles = (articles) => {
    return articles;
}

const mapStateToProps = state => ({
    articles: getVisibleArticles(state.articles)
})

const mapDispatchToProps = dispatch => ({
    getArticles: (articles) => {dispatch(requestArticlesAjax(articles))}
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(articleList)
