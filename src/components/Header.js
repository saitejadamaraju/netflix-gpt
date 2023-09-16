import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header=()=>{
     
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const user=useSelector((store)=>store.user);

    const handleSignout=()=>{

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            //navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });

    }

    useEffect(()=>{
        const auth=getAuth();
        const unsubscirbe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            const {uid,displayName,email} = user;
            dispatch(addUser({uid:uid,displayName:displayName,email:email}));
            // ...
            navigate("/browse");
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
          }
        });

        return () => unsubscirbe();
        
      },[])
  

    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"/>
        {user && <div className="flex p-4 m-2">
            <div className="px-2">
                <img className="w-10 "
                    alt="logo"
                    src="https://tse1.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&rs=1&c=1&qlt=95&w=143&h=114"/>
            </div>

            <div className="px-2">             
                <button onClick={handleSignout} className="font-semibold  bg-red-700 w-20 h-full rounded-sm cursor-pointer">Sign out</button>
            </div> 
        </div>}
      </div>

    );
}

export default Header;