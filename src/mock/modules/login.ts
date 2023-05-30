export default {
  getRole: (config: any) => {
    const { username, password, uuid, code } = JSON.parse(config.body)
    let res
    if(username === 'admin' && password === '1' && uuid && code) {
      res = {
        code: 200,
        token: 'dasfdsasff_412312',
        role: 'Admin',
        msg: '管理员登陆成功'
      } 
    } 
    else if (username === 'admin' && password !== '1' && uuid && code) {
      res = {
        code: 400,
        msg: '密码错误，请重新输入'
      } 
    }
    else if ( username === 'user' && password === '2' && uuid && code) {
      res = {
        code: 200,
        token: 'ttytyt14r4f_231273',
        role: 'User',
        msg: '普通用户登陆成功'
      }
    } 
    else if (username === 'user' && password !== '2' && uuid && code) {
      res = {
        code: 400,
        msg: '密码错误，请重新输入'
      } 
    } 
    else if (username !== 'admin' || username !== 'user') {
      res = {
        code: 404,
        msg: '该账号不存在'
      } 
    } 

    return res
  } 
}



