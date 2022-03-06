import './App.css';
import Infographic from './components/Infographic';
import Button from './components/Button';
import Caption from './components/Caption';
import Caption2 from './components/Caption2';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <div className="Logo">
        <Logo/>
      </div>
      <div className="App">
        <h1>Where do you want to go?</h1>
      </div>
      <div className="Infographic">
        <Infographic/>
      </div>
      <div className="Caption">
        <Caption/>  
      </div>
      <div className="Caption2">
        <Caption2/>  
      </div>
      <div className="Button">
        <Button/>  
      </div>
    </>
  );
}

export default App;
