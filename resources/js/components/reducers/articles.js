const articles = (state = {
        isLoading: false,
        orderBy: 'name',
        order: 'asc',
        page: 1,
        data: []
    },
    action) => {
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
        return Object.assign({}, state, {isLoading: false,
            page: action.payLoad.data.current_page,
            lastPage: action.payLoad.data.last_page,
            perPage: action.payLoad.data.per_page,
            total: action.payLoad.data.total,
            data:action.payLoad.data.data.map(
                x => ({
                    'name':x.name,
                    'slug': x.slug,
                    'content': x.content,
                    'category': x.category.id
                })
        )})
        case 'SORT_ARTICLES':
        return Object.assign({}, state, {orderBy: action.payLoad.column, order: action.payLoad.direction})
        case 'SET_ARTICLE_PAGE':
        return Object.assign({}, state, {page: action.payLoad.page});
        default:
        return state
    }
}

export default articles
