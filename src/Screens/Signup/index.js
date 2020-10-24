import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../../Store/action/auth.action';
import { Redirect } from 'react-router-dom';

/**
* @author Rashmi
* @function Signup
**/


export default function Signup() {
    const history = useHistory();
    const dispatch = useDispatch();

    // UseState hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Form Submit function
    const handleSubmit = (event) => {
        event.preventDefault(); //To prevent default behaviour
        dispatch(authenticateUser()); // On Submit dispatched authenticateUser action 
        <Redirect to="/dashboard" />
        history.push({
            pathname: '/dashboard',
        })
    }

    return (
        <div className="container mx-auto">
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
                    <button type="submit" className="btn btn-info w-100">Signup</button>
                </form>
            </div>
        </div>
    );
}