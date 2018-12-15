import { combineReducers } from 'redux'
import articles from './articles'
import articlePage from './articlePage'

const rootReducer = combineReducers({
    articles,
    articlePage
})

export { rootReducer }
