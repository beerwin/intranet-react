import thunkMiddleware from 'redux-thunk'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index'
import AddArticle from '../containers/AddArticle'
import VisibleArticleList from '../containers/VisibleArticleList';
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <main className='py-4'>
                        <div className='container'>
                            <Switch>
                                <Route exact path="/articles" component={VisibleArticleList} />
                                <Route exact path="/articles/add" component={AddArticle} />
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

axios.interceptors.response.use(undefined, function(error){
    if (error.response.status === 401) {
        location.href = '/login';
        return Promise.reject(error);
    }
});

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
