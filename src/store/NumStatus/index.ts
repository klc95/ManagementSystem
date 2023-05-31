import { AUTOINCREMENT } from '../actionsType';
  
let initState = {
  num: 30,
};

let persistStatus = localStorage.getItem('root')
if (persistStatus) {
  const dd = JSON.parse(persistStatus);
  initState = dd.handleNum
}

const store = {
  state: initState,
  actions: {
    autoIncrement(newState: { num: number }) {
      newState.num++;
    },
    add(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    }
  },
  asyncActions: {
    asyncAdd(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: AUTOINCREMENT });
      }, 1000);
    }
  },
  actionNames: {}
};

let actionNames = {};
for (let key in store.actions) {
  actionNames[key] = key;
}
store.actionNames = actionNames;

export default store;
