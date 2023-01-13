import { call,put,takeEvery} from 'redux-saga/effects';
import { GET_USERS_FETCH,GET_USERS_SUCCES } from './actions';
function usersFetch(){
    return fetch('https://dummyjson.com/users').then(response=>response.json()); 
}
function* workGetUsersFetch(){
    const users = yield call(usersFetch);
    yield put({type:GET_USERS_SUCCES,users})
}
function* mySaga(){ 

    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch);
}
export  default mySaga;
