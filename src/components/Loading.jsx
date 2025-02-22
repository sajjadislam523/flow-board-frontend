const Loading = () => {
    return (
        /* From Uiverse.io by devAaus */
        <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
            <div className="flex items-center justify-center w-20 h-20 text-4xl text-blue-400 border-4 border-transparent rounded-full animate-spin border-t-blue-400">
                <div className="flex items-center justify-center w-16 h-16 text-2xl text-red-400 border-4 border-transparent rounded-full animate-spin border-t-red-400"></div>
            </div>
        </div>
    );
};

export default Loading;
