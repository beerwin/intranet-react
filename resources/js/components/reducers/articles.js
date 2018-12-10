const articles = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTICLE':
        return [
            ...state,
            {
                name: action.payLoad.name,
                slug: action.payLoad.slug,
                content: action.payLoad.content,
                category: parseInt(action.payLoad.category)
            }
        ]
        case 'INVALIDATE_ARTICLES':
        return [
            ...state
        ]
        case 'REQUEST_ARTICLES':
        return [
            ...state
        ]
        case 'RECEIVE_ARTICLES':

        return [
            ...state,
            ...action.payLoad.data.map(
                x => ({
                    'name':x.name,
                    'slug': x.slug,
                    'content': x.content,
                    'category': x.category.id
                }))
        ]
        default:
        return state
    }
}

export default articles
