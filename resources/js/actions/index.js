import axios from 'axios'
import {API_URL} from './config'

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

export const requestArticle = () => ({
    type: 'REQUEST_ARTICLE',
    payLoad: []
})

export const receiveArticle = json => ({
    type: 'RECEIVE_ARTICLE',
    payLoad: json
})

export const invalidateArticle = () => ({
    type: 'INVALIDATE_ARTICLE',
    payLoad: []
})

function canRequestArticles(state, params) {
    if (state.articles.isLoading === true) {
        return false
    }
    if (state.articles.data.length === 0 || params.force === true) {
        return true
    }
    if (state.articles.page === params.page
        && state.articles.orderBy === params.orderBy
        && state.articles.order === params.order) {
        return false
    }
    return true;
}

function canRequestArticle(state, params) {
    if (state.articlePage.isLoading) {
        return false
    }
    if (state.articlePage.article.slug === '') {
        return true
    }
    if (state.articlePage.slug === params) {
        return false
    }
    return true
}

export function requestArticlesAjax(params) {
    return function (dispatch, getState) {
        if (canRequestArticles(getState(), params)) {
            dispatch(requestArticles());
            axios.get(API_URL + '/articles/'+params.orderBy+'/'+params.order+'?page=' + params.page)
                .then(function(response){
                    dispatch(receiveArticles(response))
                })
                .then(dispatch(setArticlePage(params.page)))
                .then(dispatch(sortArticles(params.orderBy, params.order)))
                .then(dispatch(invalidateArticles()));
        }
    }
}

export function requestSingleArticle(params) {
    return function (dispatch, getState) {
        if (canRequestArticle(getState(), params)) {
            dispatch(requestArticle());
            axios.get(API_URL + '/articles/' + params)
            .then(function(response){
                dispatch(receiveArticle(response));
            })
            .then(dispatch(invalidateArticle()))
        }
    }
}
