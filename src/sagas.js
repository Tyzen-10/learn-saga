import {takeEvery,call,put} from 'redux-saga/effects'
import { GET_POSTS_FETCH,GET_POSTS_SUCCESS } from './actions'
function postsFetch(){
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
}
function* workGetPostsFetch(){
    const posts = yield call(postsFetch);
    yield put({type:GET_POSTS_SUCCESS,posts})
}
function* mySaga(){
    yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch)
}
export default mySaga