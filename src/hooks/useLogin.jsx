import { useContext } from "react";
import { LoginContext } from "../provider/LoginProvider";

const useLogin = () => {
    const context = useContext(LoginContext);
    return context;
};

export default useLogin;
