import { legacy_createStore, combineReducers } from "redux";
import handleNum from './NumStatus/reducer'
import handleArr from './ArrStatus/reducer'

let reducer = combineReducers({
  handleNum,
  handleArr
})

const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store