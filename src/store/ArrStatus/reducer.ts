import handleArr from './index'

let reducer = (state = { ...handleArr.state }, action: { type: string, val: number}) => {
  let newState = JSON.parse(JSON.stringify(state));
  
  for(let key in handleArr.actionNames) {
    if(action.type === handleArr.actionNames[key]) {
      handleArr.actions[handleArr.actionNames[key]](newState, action)
      break;
    }
  }
  return newState
}

export default reducer;