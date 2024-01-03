import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Progress } from "flowbite-react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <Progress/>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;