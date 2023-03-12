import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';
import firebase from 'firebase/compat/app';
import './Login.css'

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/cards');
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;