"use client";
import React, { useState } from "react";
export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [successmsg, setSuccessmsg] = useState();
  const [errormsg, setErrorMsg] = useState();
  const submit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const result = await axios.post(
        "https://test-application-be.vercel.app/registration",
        data
      );
      console.log(result);
      setSuccessmsg("Registration is Successful");
    } catch (error) {
      setErrorMsg("Registration is failed");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submit();
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your Name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {successmsg && <p>{successmsg}</p>}
      {errormsg && <p>{errormsg}</p>}
    </div>
  );
};
