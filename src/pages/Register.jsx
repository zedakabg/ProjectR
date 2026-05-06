import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");

  const register = () => {
    alert("User registered: " + email);
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;