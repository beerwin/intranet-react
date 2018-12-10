import React from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions'

const AddArticle = ({dispatch}) => {
    let name, slug, content, category

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!name.value.trim()){
                    return
                }
                if (!slug.value.trim()) {
                    return
                }
                if (!content.value.trim()) {
                    return
                }
                if (!category.value.trim() && isNaN(parseInt(category.value))) {
                    return
                }
                dispatch(addArticle({name: name.value, slug: slug.value, content: content.value, category: category.value}))
                name.value = ''
                slug.value = ''
                content.value = ''
                category.value = ''
            }}
            >
                <div className="form-group">
                    <label className='control-label'>Article title</label>
                    <input className='form-control' ref={node => (name = node)} id="articleName" />
                </div>
                <div className="form-group">
                    <label className='control-label'>Article slug</label>
                    <input className='form-control' ref={node => (slug = node)} id="articleSlug" />
                </div>
                <div className="form-group">
                    <label className='control-label'>Article content</label>
                    <textarea className='form-control' ref={node => (content = node)} id="articleContent" />
                </div>
                <div className="form-group">
                    <label className='control-label'>Article Category</label>
                    <input className='form-control' ref={node => (category = node)} id="articleCategory" />
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Add article</button>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddArticle)
