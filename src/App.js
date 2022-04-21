// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Names from './Names.js';
import babyNamesData from "./babyNamesData.json"; 
import FilterNames from './FilterNames';

function genderColor(gender) {
  if (gender === "m") {
    return 'male-color';
  } 
  
  return 'female-color';
}

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      {babyNamesData
        .filter((babyName) => {
          return (
            babyName.name.toLowerCase().includes(filter.toLowerCase()) ||
            filter === ""
          );
        })
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((babyName) => {
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
