import GetRouters from './router';
import AuthRouter from '@/components/AuthRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthRouter>
          <GetRouters />
        </AuthRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
