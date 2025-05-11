import logo from './logo.svg';
import './App.css';
import "milligram";
import {useState} from "react";
import {LoginForm} from "./LoginFrom";

function App() {

    const[loggenInAs, setLoggenInAs] =useState(null);

    /*function login(email){
        if (email){
            setLoggenInAs(email);
        }
    }*/


    function handleAuthenticate(email){
        setLoggenInAs(email);

    }

    let content;

    if (loggenInAs) {
        content = <div>
            <h2>'Witaj, {loggenInAs}</h2>
            <a onClick={()=> setLoggenInAs(null)}>Wyloguj </a>
        </div>;
    } else {
        content = <LoginForm onLogin={handleAuthenticate}/>

    }



    return (
    <div >
      <h1>System do zapisów na zajęcia</h1>
        {content}


    </div>
  );
}

export default App;
