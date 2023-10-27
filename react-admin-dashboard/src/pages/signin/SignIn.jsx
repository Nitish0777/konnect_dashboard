// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/Auth";
// import Layout from "../layout/Layout.jsx";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useAuth();

//   const navigate = useNavigate();
//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API}/api/users/login`,
//         {
//           email,
//           password,
//         }
//       );
//       console.log(res);
//       if (res.data.success) {
//         console.log(res);
//         const { user, token } = res.data;
//         setAuth({
//           token: token,
//           user: user,
//         });
//         localStorage.setItem("auth", JSON.stringify({ token, user }));
//         toast.success("Sign in successful");
//         navigate("/");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Layout>
//       <div>
//         Sign In form
//         <form onSubmit={handleSignIn}>
//           <input
//             type="text"
//             placeholder="Email"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     </Layout>
//   );
// };
// export default SignIn;
import React, { useState } from "react";
import style from "./signin.module.css";

const universities = [
  "Bharati Vidyapeeth",
  "Deccan College Post-Graduate and Research Institute",
  "Defence Institute of Advanced Technology (formerly Institute of Armament Technology)",
  "Dnyaneshwar Vidyapeeth",
  "FLAME University",
  "Gokhale Institute of Politics and Economics",
  "Indian Institute of Information Technology, Pune",
  "Indian Institute of Science Education and Research, Pune",
  "Christ University Pune Lavasa, Campus",
  "Indian Institute of Science Education and Research, Pune",
  "National Institute of Construction Management and Research",
  "National Defence Academy",
  "Tilak Maharashtra University",
  "Savitribai Phule Pune University",
  "Spicer Adventist University",
  "Symbiosis International University",
  "MIT University - MIT Art, Design and Technology University",
  "Ajeenkya DY Patil University",
  "Flame University",
  "MIT - World Peace University",
  "Spicer Adventist University",
  "Christ University Pune Lavasa, Campus",
  "Symbiosis International University",
  "Symbiosis Skills and Professional University",
];

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form validation logic here
    // For example, you can check the email and password format
    // and show appropriate error messages if they are invalid.

    // Your form submission logic here
    alert("Sign In successful! Welcome back to Connect!");
    // Redirect to the dashboard page
    // window.location.href = "dashboard.html"; // Replace with your actual dashboard page URL
  };

  return (
    <div className={style.container}>
      <div className={style.logo1}>
        <link to="..header/Header" className={style.logo}>
          <img
            src="Nitish-SIH\inno\client\src\assets\light.png"
            className={style.logoimg}
            height="50"
            width="150"
            alt="logo"
          />
        </link>
      </div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <label htmlFor="email">College Email:</label>
          <div className={style.clg}>
            <input
              type="email"
              style={{ width: "95%" }}
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
          <label htmlFor="password">Password:</label>
          <div className={style.password_container}>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" id="show-password">
              Show
            </button>
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
