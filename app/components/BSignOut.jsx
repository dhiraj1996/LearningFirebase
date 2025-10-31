import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import app from "../firebase"
import BAuthSignIN from './BAuthSignIN';



const auth = getAuth(app);




const BSignOut = () => {
    const [loggedUser, setLoggedUser] = useState();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        //   console.log(user);
          setLoggedUser(user);
        } else {
          setLoggedUser(null);
        }
      });
    });

    if (loggedUser === null) {
      return (
        <div>
          <BAuthSignIN />
        </div>
      );
    }

  return (
    <div>
      <h1>BSignOut</h1>
      <p>Congratulation you are logged IN {loggedUser?.email}</p>
      <button
        className="bg-white text-black px-4 py-2"
        onClick={() => signOut(auth)}
      >
        {" "}
        Log Out
      </button>
    </div>
  );
}

export default BSignOut