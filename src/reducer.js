import {combineReducers} from 'redux'

const constants = () => ({
    type: ["ALL", "COLA", "NON-TAXABLE", "TAXABLE"],
    status: ["true", "false"],
    months: ["All", "January", "February", "March"]
});

const rootReducer = combineReducers({
    constants
})

export default rootReducer