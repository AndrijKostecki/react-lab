import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    //let email = 'kostecki.andrij@gmail.com';
    const[email, setEmail] = useState('');
    let message;


    function handleChange(event) {
        setEmail(event.target.value);

    }

    if (email.length <= 5) {
        message='za krótki';
    } else if (email.length < 15) {
        message='w sam raz';}
    else if (email.length > 15) {message='długi';}


    return (
    <div >
      <h1>System do zapisów na zajęcia</h1>
        <h2>Twój-email to {email}</h2>

        <div>{message}</div>


        <input type = "text" onChange={handleChange}/>


    </div>
  );
}

export default App;
