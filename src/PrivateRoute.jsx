import { Navigate, Route } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "./MyContext";

const PrivateRoute = ({ children }) => {
  let { user } = useContext(EventContext);
  // const user = true;
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
