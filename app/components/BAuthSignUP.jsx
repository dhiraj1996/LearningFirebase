import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const BAuthSignUP = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((value) => alert("Success", value))
      .catch((e) => alert("Failed", e));
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-start">
      <h1 className="text-2xl">Sign UP</h1>
      <div>
        <label className="mr-2">Email</label>
        <input
          className="bg-gray-700"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your Email"
        />
      </div>
      <div>
        <label className="mr-2">Password</label>
        <input
          className="bg-gray-700"
          type="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="border px-4 py-2 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BAuthSignUP;
