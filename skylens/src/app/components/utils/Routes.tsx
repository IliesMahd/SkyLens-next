"use client";

import { Home } from "@/app/page";
import { Route } from "react-router-dom"; // Import the Route component from the react-router-dom package.

// export function Routes() {

//     interface Route {
//         path: string;
//         component: JSX.Element;
//     }

//     const routes: Route[] = [
//         {
//             path: '/', component: <Home/>
//         }
//     ]

//     return (
//         <>
//             {routes.map((route, index) => (
//                 <Route key={index} path={route.path} element={route.component}></Route>
//             ))}
//         </>
//     )
// }

function Routes() {
    interface Route {
        path: string;
        component: JSX.Element;
    }

    const routes: Route[] = [
        {
            path: '/', component: <Home/>
        }
    ]

    return (
        <>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component}></Route>
            ))}
        </>
    )   
}

Routes.getInitialProps = async (ctx: any) => {
    return {}
}

export default Routes;