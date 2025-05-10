import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    //let email = 'kostecki.andrij@gmail.com';
    const[email, setEmail] = useState('');
    //const[loggedIn, setLoggedIn] = useState(false);
    const[loggenInAs, setLoggenInAs] =useState(null);




    function handleChange(event) {
        setEmail(event.target.value);

    }

    function handleAuthenticate(){
        setLoggenInAs(email);
        setEmail('');
    }

    let content;

    if (loggenInAs) {
        content = <div>
            <h2>'Witaj, {loggenInAs}</h2>
            <a onClick={()=> setLoggenInAs(null)}>Wyloguj </a>
        </div>;
    } else {
        content = <div>
            <input type = "text" onChange={handleChange} value={email} />
            <button onClick={handleAuthenticate}> Zaloguj się </button>

        </div>
    }



    return (
    <div >
      <h1>System do zapisów na zajęcia</h1>
        {content}


    </div>
  );
}

export default App;
