import { Link, Navigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, Auth,setPersistence,browserLocalPersistence } from "firebase/auth";
import type { OAuthCredential } from "firebase/auth";

import { setUser } from "../../features/googleAuth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { AuthContext } from "../../main";
import { Loader } from "../../shared/Loader/Loader";


export const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const provider = new GoogleAuthProvider();
  const auth:any = useContext(AuthContext)

  const getUser = async () => {
    setLoading(true)
    setPersistence(auth, browserLocalPersistence)
  .then(() => {
    dispatch(setUser({
        displayName:auth.currentUser && auth.currentUser.displayName, 
        email:auth.currentUser && auth.currentUser.email, 
        photoURL:auth.currentUser && auth.currentUser.photoURL, 
        uid:auth.currentUser && auth.currentUser.uid
      }))
      setLoading(false)
    
  })
  .catch((error) => {
    // Handle Errors here.
  
  });
}
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
        const token:string | undefined | null = credential && credential.accessToken;
        const user = result.user;
        const {displayName, email, photoURL, uid } = user
        dispatch(setUser({displayName, email, photoURL, uid}))
      }).catch((error) => {
        console.error(error)
        // Handle Errors here.
      });
  }
  useEffect(() => {
    getUser()
  })
  if (loading) {
    return <Loader />
  }
  return (
    <>
    <h1>LoginPage</h1>
    <Link to="/"> Home </Link>
    <button onClick={signInWithGoogle}>Login with google</button>
    {auth.currentUser && <Navigate to="/"/>}
    </>
  )
}
