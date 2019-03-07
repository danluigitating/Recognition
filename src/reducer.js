import {combineReducers} from 'redux'
import drawer from './component/NavDrawerReducer'


const constants = () => ({
});

const rootReducer = combineReducers({
    constants,
    drawer
})

export default rootReducer