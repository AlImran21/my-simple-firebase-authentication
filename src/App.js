import './App.css';
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth (app);
function App() {
  const [user, setUser] = useState ({});
  const googleProvider = new GoogleAuthProvider ();
  const githubProvider = new GithubAuthProvider ();
  const faceBookProvider = new FacebookAuthProvider ();

  const handleGoogleSignIn = () => {
    signInWithPopup (auth, googleProvider)
    .then (result => {
      const user = result.user;
      setUser (user);
      console.log (user);
    })
    .catch (error => {
      console.error (error);
    })
  }

  const handleGithubSignIn = () => {
    signInWithPopup (auth, githubProvider)
    .then (result => {
      const user = result.user;
      setUser (user);
      console.log (user);
    })
    .catch (error => {
      console.error (error); 
    })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup (auth, faceBookProvider)
    .then (result => {
      const user = result.user;
      setUser (user);
      console.log (user);
    })
    .catch (error => {
      console.error (error);
    })
  }

  const handleSignOut = () => {
    signOut (auth)
    .then ( () => {
      setUser ({});
    })
    .catch (error => {
      setUser ({});
    })
  }

 
  return (
    <div className="App">
      
      {
        user.uid ? <button onClick={handleSignOut} style={{display: 'block', textAlign: 'center', margin: '10px auto'}}>Sign Out</button> 
        : 
        <>
          <button onClick={handleGoogleSignIn} style={{display: 'block', textAlign: 'center', margin: '10px auto'}}>Google Sign In</button>
          <button onClick={handleFacebookSignIn} style={{display: 'block', textAlign: 'center', margin: '10px auto'}}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn} style={{display: 'block', textAlign: 'center', margin: '10px auto'}}>Github Sign In</button>
        </>
      }

      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />
      
    </div>
  );
}

export default App;
