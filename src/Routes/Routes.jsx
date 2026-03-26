import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            }
        ]
    }
])