// import logo from './logo.svg';
import './App.css';
import Names from './Names.js';
import babyNamesData from "./babyNamesData.json"; 

function genderColor(gender) {
  if (gender === "m") {
    return 'male-color';
  } 
  
  return 'female-color';
}

function App() {
  return (
    <div className="App">
      {babyNamesData.map((babyName) => {
        return (
          <div className={`baby-name ${genderColor(babyName.sex)}`}>
            <Names name={babyName.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
