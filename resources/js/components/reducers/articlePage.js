const articlePage = (state = {
    isLoading: false,
    article: {
        name: '',
        slug: '',
        content: '',
        category: {
            id: 0,
            name: ''
        }
    }
},
action) => {
    switch (action.type) {
        case 'REQUEST_ARTICLE':
        return Object.assign({}, state, {isLoading: true})
        case 'RECEIVE_ARTICLE':
        return Object.assign({}, state, {
            isLoading: false,
            article: {
                name: action.payLoad.data.name,
                slug: action.payLoad.data.slug,
                content: action.payLoad.data.content,
                category: {
                    id: action.payLoad.data.category.id,
                    name: action.payLoad.data.category.title
                }
            }
        })
        case 'INVALIDATE_ARTICLE':
        return state
        default:
        return state
    }
}

export default articlePage
