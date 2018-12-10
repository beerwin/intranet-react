import thunkMiddleware from 'redux-thunk'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index'
import AddArticle from '../containers/AddArticle'
import VisibleArticleList from '../containers/VisibleArticleList';
import {requestArticlesAjax} from '../actions'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <Switch>
                        <Route exact path="/articles" component={VisibleArticleList} />
                        <Route exact path="/articles/add" component={AddArticle} />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)

store.dispatch(requestArticlesAjax());
