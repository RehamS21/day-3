import React, { useState } from 'react';

const FormDemo = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");


    function handleUsernameChange(e) { // e mean event
        setusername(e.target.value);        
    }

    function handlePassordChange(e) {
        setpassword(e.target.value);
    }

    function handleLoginButton(e) {
        e.preventDefault();
        alert(username +" " +password);
    }
    return (
        <div>
            <form>
                <input type='text' placeholder='username'value={username} onChange={handleUsernameChange}/><br />
                <input type='password' placeholder='password' value={password} onChange={handlePassordChange}/> <br />


                <button onClick={handleLoginButton}>Login</button>
            </form>
        </div>
    );
}

export default FormDemo;
