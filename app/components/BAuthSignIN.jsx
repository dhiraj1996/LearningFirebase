import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const BAuthSignIN = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignIN = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((value) => console.log(value))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <main>
        <div className="text-center mb-5 text-2xl">SignIN</div>
        <div className="mb-2">
          <label htmlFor="Email" className="mr-4">
            Email
          </label>
          <input
          className="bg-gray-700"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="mr-4">
            Password
          </label>
          <input
          className="bg-gray-700"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Enter your Password"
          />
        </div>
        <div>
          <button
            className="border px-4 py-2 cursor-pointer hover:text-red-400"
            onClick={handleSignIN}
          >
            Sign IN
          </button>
        </div>
      </main>
    </>
  );
};

export default BAuthSignIN;
