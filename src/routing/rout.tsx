import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
        errorElement:<ErrorPage/>,
		children: [
			{ index: true, element: <HomePage /> },
            {path:'/login',element:<LoginPage/>}, 
			
		],
	},{
        element:<PrivateRouts/>,
        children:[
            {
				path: "user",
				element: <UsersPage />,
				children: [
					{ path: ":id", element: <UserDetail /> }
				],
			}, 
        ]
    }
]);

export default router;