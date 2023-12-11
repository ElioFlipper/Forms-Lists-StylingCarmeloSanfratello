import { useState } from "react";

export function Login(){
   const [data, setData] = useState({
    username: "",
    password:""
   })

   function handleInputChange(event){
    const value = event.target.value
   }

   return (
    <div>
        <input value = {data.username} onInput={handleInputChange} />
        <input value = {data.password} onInput={handleInputChange} />
    </div>
   )
}