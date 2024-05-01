import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Error,
    About,
    Cocktail,
    HomeLayout,
    Landing,
    Newsletter,
    SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader(queryClient),
                errorElement: <SinglePageError />,
            },
            {
                path: "Cocktail/:id",
                element: <Cocktail />,
                loader: singleCocktailLoader(queryClient),
                errorElement: <SinglePageError />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "Newsletter",
                action: newsletterAction,
                element: <Newsletter />,
            },
        ],
    },
]);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />;
        </QueryClientProvider>
    );
};
export default App;
