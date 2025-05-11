
import {useState} from "react";
import MeetingsPage from "./meetings/MeetingsPage";

export function UserPanel(props) {

    return (
        <div>

            <h2>'Witaj, {props.username}</h2>
            <button onClick={()=> props.onLogout(null)}>Wyloguj </button>
            <MeetingsPage/>
        </div>
    );

}

