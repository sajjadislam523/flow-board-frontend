import { Button } from "@/components/ui/button";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const { googleSignIn } = useLogin();

    return (
        <div className="flex items-center justify-center h-screen">
            <button onClick={googleSignIn}>Sign in with Google</button>
            <Button onClick={googleSignIn}>Sign in with Google</Button>
        </div>
    );
};

export default Login;
