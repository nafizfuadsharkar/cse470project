import  { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
 

  if (isLoading) {
    return (
      <div className="flex text-3xl justify-center items-center h-screen">
        <ScaleLoader color="#2563eb" />
      </div>
    );
  }
 
  if (user?.email) {
    return children;
  }

  

  
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
