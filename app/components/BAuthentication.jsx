import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from "../firebase";
import BAuthSignUP from "./BAuthSignUP";
import BAuthSignIN from './BAuthSignIN';



// const db = getDatabase(app);
const auth = getAuth(app);

const BAuthentication = () => {
    const createUser = () =>{
        createUserWithEmailAndPassword(auth, "dhiraj@xyz.com", "dhiraj@123").then((value) => console.log(value));
    }
  return (
    <>
      {/* <div>Authetication in Firebase</div>
      <button className='border px-4 py-2 cursor-pointer' onClick={createUser}>Create User</button> */}

      {/* Second way where I have created input box and creating users  */}
      {/* <BAuthSignUP /> */}
      <BAuthSignIN />
    </>
  );
}

export default BAuthentication;