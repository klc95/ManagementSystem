import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import numStatus from '@/store/NumStatus'
import { ADD } from '@/store/actionsType'
import { getHomeDataAPI} from '@/request/api.ts'

export default function Page1() {

  let { num, sarr, menuList} = useSelector((state: RootState) => ({
    num: state.handleNum.num,
    sarr: state.handleArr.sarr,
    menuList: state.handleMenu.menuList
  }))
  
  let dispatch = useDispatch()

  const changeNum = () => {
    dispatch({
      type: ADD,
      val: 10
    })
  }
  const changeNum2= () => {
    dispatch(numStatus.asyncActions.asyncAdd)
  }
  const changeNewEle = () => {
    dispatch({
      type: 'sarrpush',
      val: 100
    })
  }
  const getHomeData = async () => {
    let homeDataAPIRes =  await getHomeDataAPI()
    console.log(homeDataAPIRes);
  };

  return (
    <div>
      Page1
      <br/>
      <div>{num}</div>
      <br />
      <Button type="primary" onClick={changeNum}>加10</Button>
      <span>-----</span>
      <Button type="primary" onClick={changeNum2}>异步加</Button>
      <br />
      <br />
      <div>{sarr}</div>
      <br />
      <div>{menuList}</div>
      <br />
      <br />
      <Button type="primary" onClick={changeNewEle}>添加新元素</Button>
      <br />
      <br />
      <Button type="primary" onClick={getHomeData}>获取主页数据</Button>
    </div>
  )
}
