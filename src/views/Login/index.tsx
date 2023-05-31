import { useState, useEffect, ChangeEvent } from 'react';
import initLogingBg from './init.ts';
import styles from './login.module.less';
import { Input, Space, Button, message } from 'antd';
import './login.less';
import { CaptchaAPI, LoginAPI} from '@/request/api.ts'
import { useNavigate } from 'react-router-dom';
import pic from  '@/assets/img/verificationCode.png'


const view = () => {
  useEffect(() => {
    initLogingBg();
    window.onresize = function () {
      initLogingBg();
    };
    getCaptchaImg()
  }, []);

  let navigateTo = useNavigate()

  const [usernameVal, setUsernameVal] = useState("")
  const [passwordVal, setpasswordVal] = useState("")
  const [captchaVal, setcaptchaVal] = useState("")
  // const [captchaImg, setCaptchaImg] = useState("");

  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcaptchaVal(e.target.value)
  }
  const goToLogin = async () => {
    if(!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning('请输入完整登录信息')
      return
    }
    let loginAPIRes = await LoginAPI({
      username: usernameVal,
      password: passwordVal,
      code: captchaVal,
      uuid: localStorage.getItem('uuid') as string
    })
  
    if(loginAPIRes.code === 200) {
      message.success(loginAPIRes.msg);
      localStorage.setItem('lege-react-management-token', loginAPIRes.token)
      navigateTo('/page1', { replace: true })
      localStorage.removeItem('uuid')
    } else {
      message.error(loginAPIRes.msg);
    } 

  }

  const getCaptchaImg = async () => {
    let captchaAPIRes =  await CaptchaAPI()
    if (captchaAPIRes.code === 200) {
      // setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img);
      // localStorage.setItem("uuid", captchaAPIRes.uuid);
      localStorage.setItem("uuid", '666666');
    }
  };
  return (
    <div className={styles.loginPage}>
      <canvas id='canvas' style={{ display: 'block' }}></canvas>
      <div className={styles.loginBox + ' loginbox'}>
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className='form'>
          <Space direction='vertical' size='large' style={{ display: 'flex' }}>
            <Input placeholder='用户名' onChange={usernameChange}/>
            <Input.Password placeholder='密码' onChange={passwordChange}/>
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange}/>
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img height="38" src={pic} alt="" />
              </div>
            </div> 
            <Button type='primary' block onClick={goToLogin}>
              登陆
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default view;
