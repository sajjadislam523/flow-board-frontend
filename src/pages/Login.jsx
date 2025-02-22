import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
    const { googleSignIn, setUser } = useLogin();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn().then((res) => {
            setUser(res.user);
            navigate("/dashboard/add-task");

            const userInfo = {
                name: res.user.displayName,
                email: res.user.email,
                photoURL: res.user.photoURL,
            };

            axios.post("http://localhost:5000/user", userInfo).then((res) => {
                console.log(res.data);
            });
        });
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-100 bg-center bg-cover dark:bg-gray-900"
            style={{
                backgroundImage: "url('/bg.avif')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 dark:opacity-70"></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
                    Welcome to Flow Board!
                </h1>
                <p className="mb-6 text-lg text-center text-gray-700 dark:text-gray-300">
                    Sign in to access your tasks and boost your productivity.
                </p>
                <Button
                    onClick={handleGoogleSignIn}
                    className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Sign in with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
