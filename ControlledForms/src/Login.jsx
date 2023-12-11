import { useState } from "react";

export function Login({onLogin}) {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    
    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        
        setData(d => {
            return {
                ...data,
                [name]: value,
            }
        })
    }

    function onLogin(event) {
        console.log(data)
    }
    
    return (
        <div>
            <input name="username" value={data.username} onInput={handleInputChange} />
            <input name="password" type="password" value={data.password} onInput={handleInputChange} />
            <button name="login" disabled={!data.username || !data.password} onClick={onLogin}>Login</button>
            <label>Ricordami</label>
            <input type="checkbox" id="checkbox" />
        </div>
    )
}