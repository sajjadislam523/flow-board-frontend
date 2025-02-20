import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import LoginProvider from "./provider/LoginProvider";
import routes from "./router/Routes";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={QueryClient}>
            <LoginProvider>
                <RouterProvider router={routes} />
            </LoginProvider>
        </QueryClientProvider>
    </StrictMode>
);
