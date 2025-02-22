import Loading from "@/components/Loading";
import useLogin from "@/hooks/useLogin";
import PropTypes from "prop-types";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useLogin();

    useEffect(() => {
        if (!loading && !user) {
            toast.error("Please login to access this page");
        }
    }, [user, loading]);

    if (loading) {
        return <Loading />;
    }

    return user?.email ? children : <Navigate to="/" replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
