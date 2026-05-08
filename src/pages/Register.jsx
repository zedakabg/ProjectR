import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      email,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration successful!");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;