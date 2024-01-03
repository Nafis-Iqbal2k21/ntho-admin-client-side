import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Users from "../Pages/Users/Users";
import Registrations from "../Pages/Registrations/Registrations";
import RegistrationsStatus from "../Pages/RegistrationsStatus/RegistrationsStatus";
import QRScanner from "../Components/QRScanner/QRScanner";
import PrivateRoute from "./PrivateRoute";




const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Roots/>,
        errorElement: <ErrorMessage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },

            {
                path:'/2024/register',
                element:<Register/>
            },
            {
                path:'/users',
                element: <PrivateRoute><Users/></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5000/allData')
            },
            {
                path:'/registrations',
                element: <PrivateRoute><Registrations/></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5000/allData')
            },
            {
                path: '/user/registrations/:email',
                element: <PrivateRoute><RegistrationsStatus/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/user/${params.email}`)
            },
            {
                path: '/QRScanner',
                element: <PrivateRoute><QRScanner/></PrivateRoute>
            }

        ]
    }
])

export default Routers;