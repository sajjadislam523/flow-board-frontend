const Login = () => {
    return (
        <div>
            <div className="w-10 h-10 mx-auto mt-[50vh]">
                <div className="grid items-center justify-center grid-cols-2 gap-2 rounded-full">
                    <span className="h-5 w-5 rounded-tl-full bg-black animate-[ping_1.4s_linear_infinite]"></span>
                    <span className="h-5 w-5 rounded-tr-full bg-black animate-[ping_1.8s_linear_infinite]"></span>
                    <span className="h-5 w-5 rounded-bl-full bg-black animate-[ping_2.2s_linear_infinite]"></span>
                    <span className="h-5 w-5 rounded-br-full bg-black animate-[ping_2.6s_linear_infinite]"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
