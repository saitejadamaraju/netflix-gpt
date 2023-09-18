import Header from "./Header";
import { useState,useRef } from "react";
import { Validate } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth,updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";


const Login=()=>{
    
    const dispatch=useDispatch();

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState("");

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick=()=>{

        setIsSignInForm(!isSignInForm);
    }

    const handleLogin=()=>{
         
        //console.log(email.current.value);
        //console.log(password.current.value);
        const message=Validate(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message)return;
        const auth=getAuth();
        if(isSignInForm)
        {
            //sign In
            
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              //console.log(user);
              //navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+" - "+errorMessage);
            });

        }
        else{
            //sign up
            
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        const {uid,displayName,email} = auth.currentUser;
                        dispatch(addUser({uid:uid,displayName:displayName,email:email}));           
                        //navigate("/browse");

                      }).catch((error) => {
                         setErrorMessage(error.message);
                      });                 
                })
            .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage);
                });
        }
         
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img className="h-screen w-screen object-cover"
                 src={BG_URL}
                 alt="logo"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()}className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-semibold text-3xl my-2">{isSignInForm? "Sign In":"Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />)}
                <input ref={email} type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded-lg"/>
                <p className="text-red-600">{errorMessage}</p>
                <button onClick={handleLogin} className=" font-semibold p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">{isSignInForm? "Sign In":"Sign Up"}</button>
                <p><span className="text-gray-600 ">New to Netflix?</span><span onClick={handleClick}className="cursor-pointer">{isSignInForm? " Sign Up ":" Sign In "}now.</span> </p>
            </form>

        </div>
    );
}

export default Login;