import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';


import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')
  const {firebase}=useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email, Password).then((result) => {
       console.log(result)
       result.user.updateProfile({ displayName: username })
      .then(()=>{
        firebase.firestore().collection('users').add({
         id:result.user.uid,
          username:username,
           phone:phone
         }).then(()=>{
            history.push('/login')
         })
       })
     })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            id="email"
            name="email"

          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
            id="phone"
            name="phone"

          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e) => { setPassword(e.target.value) }}
            id="password"
            name="password"

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}