import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('auth');
  console.log(token);
  if(!token) return <Navigate to="/signin" />;
  else return element;
};

export default PrivateRoute;
