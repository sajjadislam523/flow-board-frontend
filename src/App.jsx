import useThemeSync from "@/hooks/useThemeSync";
import routes from "@/router/routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
    useThemeSync();
    return <RouterProvider router={routes} />;
};

export default App;
