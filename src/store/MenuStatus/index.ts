let store = {
  state: {
    currentMenu: 'home'
  },
  actions: {
    selectMenu(newState: { currentMenu: string }, action: { type: string, val: string }) {
      newState.currentMenu = action.val
    }    
  },
  actionNames: {}
}
let actionNames = {};
for(let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames

export default store;