import { GET_POSTS_SUCCESS,DELETE_POST } from "./actions"

const myFirstReducer = (state={posts:[]},action)=>{
    switch(action.type){
        case GET_POSTS_SUCCESS:
            return {...state , posts: action.posts}
        case DELETE_POST:
            return {...state, posts: state.posts.filter((post)=>post.id!==action.postId)}
        default:
            return state
    }
}
export default myFirstReducer