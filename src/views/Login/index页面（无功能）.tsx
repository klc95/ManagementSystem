import { useState, useEffect, ChangeEvent } from 'react';
import initLogingBg from './init.ts';
import styles from './login.module.less';
import { Input, Space, Button } from 'antd';
import './login.less';
import verificationCode from "@/assets/img/verificationCode.png";

const view = () => {
  useEffect(() => {
    initLogingBg();
    window.onresize = function () {
      initLogingBg();
    };
  }, []);

  const [usernameVal, setUsernameVal] = useState("")
  const [passwordVal, setpasswordVal] = useState("")
  const [captchaVal, setcaptchaVal] = useState("")

  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcaptchaVal(e.target.value)
  }
  const goToLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal);
  }
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
              <div className="captchaImg">
                <img height="38" src={verificationCode} alt="" />
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
