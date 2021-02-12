import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className="login">
            <Link>
            <img className="login__logo" src="http://pngimg.com/uploads/banana/banana_PNG850.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <button className="login__registerButton">Create you BikeStore Account</button>
            </div>

        </div>
    )
}

export default Login