import React, { useState ,useRef } from 'react';
import Header from './Header';
import BgImg from '../img/bgimg.jpg';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function Login() {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : name.current.value // ✅ safe handling
    );
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      // Sign Up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
     
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/136090893?v=4"
}).then(() => {
  const {uid, email, displayName, photoURL} = auth.currentUser;
  dispatch(
    addUser({
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    })
  )
  navigate("/browse");
}).catch((error) => {
   setErrorMessage(error.code +"-"+ error.message);
});

    console.log('User signed up:', user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
  });
}
    else{
      // Sign In logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate("/browse");
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage);
    });
  }
    
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen text-white">

      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src={BgImg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 "></div>

      {/* Form Container */}
      <div className="flex justify-center items-center h-full px-4 opacity-90">
        <form  onSubmit={(e)=>e.preventDefault()} className="bg-black/80 backdrop-blur-md p-10 rounded-lg w-full max-w-md shadow-2xl">

          <h1 className="text-3xl font-bold mb-8">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>

          {!isSignInForm && (
            <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-red-600"
          />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-red-600"
          />
          <p className="text-red-500 mb-4">{errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-red-600 py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300" onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="flex justify-between items-center text-sm mt-4 text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <p className="cursor-pointer hover:underline">Need help?</p>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            {isSignInForm ? 'New to Lumniflix?' : 'Already have an account?'}
            <span
              onClick={toggleSignInForm}
              className="text-white ml-1 cursor-pointer hover:underline"
            >
              {isSignInForm ? 'Sign Up now' : 'Sign In now'}
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;