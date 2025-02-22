import App from "@/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginProvider from "./provider/LoginProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <LoginProvider>
            <App />
        </LoginProvider>
    </QueryClientProvider>
);
