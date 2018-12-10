import { connect } from 'react-redux'
import articleList from '../components/articleList'
import { requestArticlesAjax } from '../actions/index'

const getVisibleArticles = (articles) => {
    return articles;
}

const mapStateToProps = state => ({
    articles: getVisibleArticles(state.articles)
})

const mapDispatchToProps = dispatch => ({
    getArticles: () => {dispatch(requestArticlesAjax())}
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(articleList)
