let initMenuState = {
  menuList: [],
};

let persistStatus = localStorage.getItem('root')
if (persistStatus) {
  const dd = JSON.parse(persistStatus);
  initMenuState = dd.handleMenu
}

const store = {
  state: initMenuState,
  actions: {
    setMenuList(newState: { menuList: MenuOptions[] },  action: { type: string, val: MenuOptions[] }) {
      newState.menuList = action.val
    },
  },
  actionNames: {}
};

let actionNames = {};
for (let key in store.actions) {
  actionNames[key] = key;
}
store.actionNames = actionNames;

export default store;
