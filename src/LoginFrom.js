import {useState} from "react";

export function LoginForm(props) {
    const [email, setEmail] = useState('');

    function handleChange(event) {
        setEmail(event.target.value);

    }

    return (
        <div>

        <input type="text" value={email} onChange={handleChange} />
        <button type="button" onClick={() => props.onLogin(email)}> Zaloguj się</button>
    </div>
);

}