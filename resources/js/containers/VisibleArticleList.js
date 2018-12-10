import { connect } from 'react-redux'
import articleList from '../components/articleList'

const getVisibleArticles = (articles) => {
    return articles;
}

const mapStateToProps = state => ({
    articles: getVisibleArticles(state.articles)
})

const mapDispatchToProps = dispatch => ({

})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(articleList)
