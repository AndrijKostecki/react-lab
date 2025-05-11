import logo from './logo.svg';
import './App.css';
import "milligram";
import {useState} from "react";
import {LoginForm} from "./LoginFrom";
import {LogOutForm, UserPanel} from "./UserPanel";

function App() {

    const[loggenInAs, setLoggenInAs] =useState(null);

    function handleAuthenticate(email){
        setLoggenInAs(email);

    }

    let content;

    if (loggenInAs) {
        content = <UserPanel userName={loggenInAs} onLogOut={handleAuthenticate} />;
    } else {
        content = <LoginForm onLogin={handleAuthenticate}/>
    }



    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggenInAs
                    ? <UserPanel username={loggenInAs} onLogout={()=> handleAuthenticate(null)} />
                    : <LoginForm onLogin={handleAuthenticate} />
            }
        </div>
    );
}

export default App;
