import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

function Login(){

    const history = useHistory();
    const[useremail,setUseremail]=useState('')
    const[userpassword,setuserpassword]=useState('')

    const loginuser=event=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth)=>{
            history.push('/')
        }).catch(e=>alert(e.message))
    }

    const signupuser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then((auth) =>{
            history.push('/')
        }).catch(e=>alert(e.message))
    }

    return(
        <div className="login">
            <Link to="/" className="header_link">
            <img className="login__logo" src="http://pngimg.com/uploads/banana/banana_PNG850.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={useremail} onChange={event => setUseremail(event.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={userpassword} onChange={event => setuserpassword(event.target.value)}></input>
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <button onClick={signupuser} className="login__registerButton">Create you BikeStore Account</button>
            </div>

        </div>
    )
}

export default Login