import ReactDOM from 'react-dom/client';
// 初始化样式
import 'reset-css';
// UI框架的样式
// 全局样式
import '@/assets/styles/global.less';
// 组件的样式
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from '@/store';
import { Provider } from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import './mock';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
