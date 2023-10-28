import React from "react";
import Main from "./pages/main";

interface IRoutes {
    path: string,
    element: React.ReactNode,
    children?: IRoutes[]
}

export const routes: IRoutes[] = [
    {
        path: '/',
        element: <Main />,
    }
]