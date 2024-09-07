import React, { useState } from "react";
import style from "./signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import logo from "../../assets/dark.png";
import GoogleTranslate from "../../components/GoogleTranslate";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError] = useState("");
  const [passwordError] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://konnect-server.vercel.app/api/users/login`,
        // `http://localhost:8000/api/users/login`,
        {
          email,
          password,
        }
      );
      // console.log(res.data);
      if (res.data.success) {
        // console.log(res);
        const { user, token } = res.data;
        setAuth({
          token: token,
          user: user,
        });
        localStorage.setItem("auth", JSON.stringify({ token, user }));
        toast.success("Sign in successful");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Link to="/">
          <img src={logo} height="70" max-width="200" alt="logo" />
        </Link>
      </div>
      <h1 style={{ color: "white" }}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <label style={{ color: "white", fontSize: "19px" }} htmlFor="email">
            College Email:
          </label>
          <div className={style.clg}>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.error} id="email-error">
            {emailError}
          </div>
        </div>
        <div className={style.form_group}>
          <label
            style={{ color: "white", fontSize: "19px" }}
            htmlFor="password"
          >
            Password:
          </label>
          <div className={style.password_container}>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className={style.error} id="password-error">
          {passwordError}
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;
