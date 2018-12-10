import axios from 'axios'

export const addArticle = article => ({
    type: 'ADD_ARTICLE',
    payLoad: article
})

export const requestArticles = () => ({
    type: 'REQUEST_ARTICLES',
    payLoad: []
})

export const receiveArticles = json => ({
    type: 'RECEIVE_ARTICLES',
    payLoad: json
})

export const invalidateArticles = () => ({
    type: 'INVLIDATE_ARTICLES',
    payLoad: []
})

export function requestArticlesAjax() {
    return function (dispatch) {
        dispatch(requestArticles());
        axios.get('http://intranet.localhost/api/articles')
            .then(function(response){
                dispatch(receiveArticles(response))
            })
            .then(dispatch(invalidateArticles()));
    }
}
