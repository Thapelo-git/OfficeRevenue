import logo from './logo.svg';
import './App.css';
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="container">
      <div className='Form-container' id='register'>
      <Register/>
      </div>
      <div className='Form-container' id='login'>

      </div>
    </div>
  );
}

export default App;
