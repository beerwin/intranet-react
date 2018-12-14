import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { requestArticlesAjax } from '../actions'

class Header extends React.Component {
    constructor (props) {
        super (props)
    }

    getArticles(e) {
        this.props.getArticles({
            orderBy: this.props.articles.orderBy,
            order: this.props.articles.order,
            page: this.props.articles.page
        })
    }

    render() {
        return (
        <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
            <div className='container'>
                <Link className='navbar-brand' to="/app">Intranet</Link>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'
    >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/articles" onClick={e => {this.getArticles(e)}}>Articles</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/articles/add">Add article</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    }
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = dispatch => ({
    getArticles: (params) => {dispatch(requestArticlesAjax(params))}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
