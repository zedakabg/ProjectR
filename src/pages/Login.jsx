import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!savedUser) {
      alert("No registered user found!");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(savedUser)
      );

      alert("Login successful!");

    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

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

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;