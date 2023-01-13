import {createStore} from 'redux'
import rootReducer from './rootReducer';

const composeEnhancer =
    (window ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ''
const store = createStore(rootReducer,{},composeEnhancer());

export default store;