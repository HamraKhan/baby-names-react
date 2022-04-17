// import logo from './logo.svg';
import './App.css';
import Names from './Names.js';
import babyNamesData from "./babyNamesData.json"; 

function App() {
  return (
    <div className="App">
      {babyNamesData.map((babyName) => {
        return (
          <div className='baby-name'>
            <Names name={babyName.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
