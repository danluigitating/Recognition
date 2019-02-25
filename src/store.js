import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'


const composeSetup =  process.env.NODE_ENV !== "production" &&
typeof window === "object" &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const configureStore = () =>{
    const store = createStore(
        rootReducer,
        composeSetup(applyMiddleware(thunk))
    )

    return store
}


export default configureStore