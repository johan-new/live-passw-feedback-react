import logo from './logo.svg';
import ValidationComponent from './ValidationComponent';
import './App.css';
import {useState} from 'react';

function App() {

  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <p />
      <input type="password" onChange={e=>setPassword(e.target.value)}/>

        <ValidationComponent 
          label={"Numbers"}
          validator={numbersValidator}
          data={password}
        />

        <ValidationComponent 
          label={"Letters"}
          validator={alphaBeticValidator}
          data={password}
        />

        <ValidationComponent 
          label={"At least one capital letter"}
          validator={alphaBeticCaptailValidator}
          data={password}
        />

        <ValidationComponent 
          label={"At least one special character (@!#$%&'*+-/=?^_`{}~)"}
          validator={specialCharValidator}
          data={password}
        />


    </div>
  );
}

function numbersValidator(param){
  return new RegExp(/\d/).test(param);
}

function alphaBeticValidator(param){
  return new RegExp(/[a-z]/).test(param);
}

function alphaBeticCaptailValidator(param){
  return new RegExp(/[A-Z]/).test(param);
}

function specialCharValidator(param){
  return new RegExp(/[@!#$%&'*+-/=?^_`{}~]/).test(param);
}

export default App;
