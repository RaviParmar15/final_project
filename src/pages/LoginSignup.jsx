import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const LoginSignup = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle ? (
        <Login toggle={toggle} setToggle={setToggle} />
      ) : (
        <SignUp toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
};

export default LoginSignup;
