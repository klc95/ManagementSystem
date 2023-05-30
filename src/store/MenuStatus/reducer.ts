import handleMenu from './index'

let reducer = (state = { ...handleMenu.state }, action: { type: string, val: string}) => {
  let newState = JSON.parse(JSON.stringify(state));
  
  for(let key in handleMenu.actionNames) {
    if(action.type === handleMenu.actionNames[key]) {
      handleMenu.actions[handleMenu.actionNames[key]](newState, action)
      break;
    }
  }
  return newState
}

export default reducer;