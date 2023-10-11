import React from 'react'
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';




function LoginScreen() {
  
  const signInWithGoogle = async () => {
    const result = await FirebaseAuthentication.signInWithGoogle();
    return result.user;
  };
  


  return (
    <div onClick={signInWithGoogle}>LoginScreen</div>
  )
}

export default LoginScreen