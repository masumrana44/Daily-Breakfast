import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch(`https://news-protal-server-masumrana44.vercel.app/news`)

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params})=>fetch(`https://news-protal-server-masumrana44.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element:<PrivateRoute><News/></PrivateRoute>,
                loader:({params})=>fetch(`https://news-protal-server-masumrana44.vercel.app/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/terms',
                element:<TermsAndCondition/>

            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile/></PrivateRoute>
            }

        ]
    }
])