import React from 'react'
import Article from './article'
import Loader from '../Loader'
import {sortArticles} from '../../actions'
import ListHeader from '../ListHeader'

class ItemList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.items.isLoading) {
            return <Loader />
        }

        return (<table className='table'>
            <thead className='thead-light'>
                <tr>
                    <ListHeader columnName='name' title='Name' items={this.props.items} sortingCallback={sortArticles} sortable />
                    <ListHeader columnName='category' title='Category' items={this.props.items} />
                </tr>
            </thead>
            <tbody>
            {this.props.items.data.map(item => (
                <Article key={item.slug} {...item} />
            ))}
            </tbody>
        </table>)
    }
}

export default ItemList
