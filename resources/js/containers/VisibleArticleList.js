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
    getArticles: (params) => {dispatch(requestArticlesAjax(params))}
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(articleList)
