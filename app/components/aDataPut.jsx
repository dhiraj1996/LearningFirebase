import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";

const db = getDatabase(app);

const aDataPut = () => {
  let putData = () => {
    set(ref(db, "users/dhiraj"), {
      id: 1,
      name: "Dhiraj",
      age: 33,
    });
  };
  return (
    <div>
      <div>To put Data we are using this</div>
      
        <button
          className="border border-white px-4 py-2 cursor-pointer hover:bg-red-400"
          onClick={putData}
        >
          Click
        </button>
      
    </div>
  );
};

export default aDataPut;
