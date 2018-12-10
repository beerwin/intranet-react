const articles = (state = {isLoading: false, data: []}, action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
        let data = [...state.data, {
            name: action.payLoad.name,
            slug: action.payLoad.slug,
            content: action.payLoad.content,
            category: parseInt(action.payLoad.category)
        }]
        return Object.assign({},state, {data: data})
        case 'INVALIDATE_ARTICLES':
        return state
        case 'REQUEST_ARTICLES':
        return Object.assign({}, state, {isLoading: true})
        case 'RECEIVE_ARTICLES':

        return Object.assign({}, state, {isLoading: false, data:action.payLoad.data.map(
            x => ({
                'name':x.name,
                'slug': x.slug,
                'content': x.content,
                'category': x.category.id
            })
        )})
        default:
        return state
    }
}

export default articles
