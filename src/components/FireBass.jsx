import React, { useState } from "react";
import "./FireBass.css";
export const FireBass = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;
    const res = await fetch(
      "https://formcheck-64c0c-default-rtdb.firebaseio.com/firsttimeusefirebass.json",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
  };
  return (
    <div>
      {" "}
      <div className="signup-container">
        <form className="signup-form" method="POST">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={getUserData}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={getUserData}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={getUserData}
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
