import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

/**
* @author Rashmi
* @function Login
**/


export default function Login() {
    const history = useHistory();
    // UseState hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Form Validate function
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    // Form Submit function
    const handleSubmit = (event) => {
        event.preventDefault(); //To prevent default behaviour
        history.push({
            pathname: '/dashboard',
        })
        localStorage.setItem('user', 'true')
    }

    return (
        <div className="container mx-auto my-lg-5 h-100">
            <h1 className="text-center pb-4 text-capitalize text-info">LOGIN</h1>
            <div className="row login-container">
                <form onSubmit={handleSubmit} className="col-md-6 col-sm-12 mx-auto border p-5 bg-light rounded login-form-container">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" autoFocus className="form-control" placeholder="Enter email" value={email} id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} id="pwd" />
                    </div>
                    <button type="submit" disabled={!validateForm()} className="btn btn-info w-100">Login</button>
                </form>
            </div>
        </div>
    );
}