// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Layout from "../layout/Layout";

// const SignUp = () => {
//   const [college, setCollege] = useState("");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_API}/api/users/register`,
//         {
//           college,
//           email,
//           name,
//           password,
//         }
//       );
//       console.log("res from backend", res);
//       if (res.data.success) {
//         console.log(res.data);
//         toast.success("Verify your mail");
//         navigate("/login");
//       } else {
//         console.log("Sign up error", res.data.messages);
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <Layout>
//       <div>
//         Sign Up form
//         <form onSubmit={handleSignUp}>
//           <input
//             type="text"
//             placeholder="College"
//             onChange={(e) => setCollege(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import style from "./signup.module.css";

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

const SignupForm = () => {
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [prn, setPrn] = useState("");

  const handleUniversityChange = (e) => {
    const selectedUniversity = e.target.value;
    setSelectedUniversity(selectedUniversity);

    const universityToEmailDomain = {
      "Bharati Vidyapeeth": "bharatividyapeeth.edu.in",
      "Deccan College Post-Graduate and Research Institute":
        "deccancollege.edu.in",
      "MIT - World Peace University": "mitwpu.edu.in",
      "MIT University - MIT Art, Design and Technology University":
        "mitwpu.edu.in",
      // Add more universities and domains as needed
    };

    if (universityToEmailDomain[selectedUniversity]) {
      setEmail2(`@${universityToEmailDomain[selectedUniversity]}`);
    } else {
      setEmail2("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError("");
    }

    // Your form submission logic here
    alert("Sign Up successful! Welcome to Connect!");
    // Redirect to the dashboard page
    // window.location.href = "dashboard.html"; // Replace with your actual dashboard page URL
  };

  return (
    <div className={style.container}>
      <link to="/Header" className="logo">
        <img
          src=".\assets\light.png"
          className={style.logoimg}
          height="50"
          width="150"
          alt="logo"
        />
      </link>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <label htmlFor="university">Select University:</label>
          <select
            id="university"
            name="university"
            value={selectedUniversity}
            onChange={handleUniversityChange}
          >
            <option value="" disabled>
              Select your university
            </option>
            {universities.map((university, index) => (
              <option key={index} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>
        <div className={style.form_group}>
          <label htmlFor="email">College Email:</label>
          <div className="clg">
            <input
              type="text"
              id="email1"
              name="email"
              required
              value={selectedUniversity + email2}
              readOnly
            />
            <input type="email" id="email2" name="email" disabled />
          </div>
          <div className={style.error} id="email-error">
            {emailError}
          </div>
        </div>
        <div className={style.form_group}>
          <label htmlFor="prn">Name:</label>
          <input
            type="text"
            id="prn"
            name="prn"
            required
            onChange={(e) => setPrn(e.target.value)}
          />
        </div>
        <div className={style.form_group}>
          <label htmlFor="password">Password:</label>
          <div className="password-container">
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
        <div className={style.form_group}>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className={style.error} id="password-error">
            {passwordError}
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
