import GetRouters from './router';
import AuthRouer from './components/AuthRouter';

function App() {
  return (
    <div className='App'>
      <AuthRouer>
        <GetRouters/>
      </AuthRouer>
    </div>
  );
}

export default App;
