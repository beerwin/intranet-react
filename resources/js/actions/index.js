import axios from 'axios'

export const addArticle = article => ({
    type: 'ADD_ARTICLE',
    payLoad: article
})

export const requestArticles = articles => ({
    type: 'REQUEST_ARTICLES',
    payLoad: []
})

export const receiveArticles = json => ({
    type: 'RECEIVE_ARTICLES',
    payLoad: json
})

export const invalidateArticles = () => ({
    type: 'INVALIDATE_ARTICLES',
    payLoad: []
})

export const sortArticles = (column, direction) => ({
    type: 'SORT_ARTICLES',
    payLoad: {
        column: column,
        direction: direction
    }
})

export const setArticlePage = (page) => ({
    type: 'SET_ARTICLE_PAGE',
    payLoad: {
        page: page
    }
})

export function requestArticlesAjax(articles) {
    return function (dispatch) {
        dispatch(requestArticles(articles));
        axios.get('http://intranet.localhost/api/articles/'+articles.orderBy+'/'+articles.order+'?page=' + articles.page)
            .then(function(response){
                dispatch(receiveArticles(response))
            })
            .then(dispatch(invalidateArticles()));
    }
}
