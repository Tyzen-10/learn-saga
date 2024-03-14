export const GET_POSTS_FETCH = 'GET_POSTS_FETCH'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const DELETE_POST = 'DELETE_POST'

export const getPostsFetch = () =>({
    type : GET_POSTS_FETCH
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})