export function handleRouter(routerList: MenuOptions[], newArr: string[] = []) {
  routerList.forEach((item: MenuOptions) => {
		if(typeof item === 'object' && item.path) {
      newArr.push(item.path)
    }
    if(item.children && item.children.length) {
      handleRouter(item.children, newArr)
    }
	});
	return newArr;
}
