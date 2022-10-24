import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const history=useHistory()

  const handleLogin = (e) => {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email,Password).then(()=>{
      history.push('/')
    }).catch((error)=>{
alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}

          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={Password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a href='/Signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;