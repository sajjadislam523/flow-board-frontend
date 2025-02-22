import { Button } from "@/components/ui/button";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
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

            axios
                .post("https://backend-teal-five-18.vercel.app/user", userInfo)
                .then((res) => {
                    console.log(res.data);
                });
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 transition-all duration-300 bg-white shadow-2xl rounded-2xl dark:bg-gray-800 hover:shadow-3xl dark:hover:shadow-gray-700/30">
                <div className="space-y-4 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-2xl dark:bg-gray-700">
                        <svg
                            className="w-8 h-8 text-blue-600 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-display">
                        Welcome to{" "}
                        <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text">
                            FlowBoard
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Organize your workflow and boost productivity with
                        intuitive task management
                    </p>
                </div>

                <Button
                    onClick={handleGoogleSignIn}
                    className="w-full group flex items-center justify-center gap-3 h-12 text-base font-semibold transition-all duration-200 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md hover:-translate-y-0.5"
                >
                    <FcGoogle className="w-6 h-6" />
                    <span>Continue with Google</span>
                </Button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    By continuing, you agree to our{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
