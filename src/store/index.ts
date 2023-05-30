import { legacy_createStore as createStore, combineReducers,applyMiddleware, compose } from "redux"; 
import { persistStore, persistReducer } from 'redux-persist'

import storage from "redux-persist/lib/storage";
import reduxThunk from 'redux-thunk'
import handleNum from "./NumStatus/reducer.ts"; 
import handleArr from "./ArrStatus/reducer.ts";
import handleMenu from "./MenuStatus/reducer.ts";

const persistConfig = {  
  key: 'root', // 储存的标识名
  storage, // 储存方式
  whitelist: ['handleNum'], //白名单 模块参与缓存
  // blacklist: ['handleArr']
}

const reducers = combineReducers({
  handleNum,
  handleArr,
  handleMenu
})

const logger = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: { type: any; }) => {
  console.group(action.type)
  console.info('dispatching', localStorage.getItem('root'));
  
  let result = next(action)
  // console.log('next state', store.getState())

  localStorage.setItem('root', JSON.stringify(store.getState()))

  console.groupEnd()
  return result
}

const persistedReducer = persistReducer(persistConfig, reducers) 

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 让浏览器redux-dev-tools能正常使用 

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块，让浏览器redux-dev-tools（异步时）能正常使用 
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
// const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk))); 

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, logger))); 
// const store = createStore(persistedReducer); 
export const persistor = persistStore(store)

export default store

