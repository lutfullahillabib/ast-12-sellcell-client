import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AllReport from "../Pages/Dashboard/Admin/AllReport";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import Buyer from "../Pages/Dashboard/Admin/Buyer";
import Seller from "../Pages/Dashboard/Admin/Seller";
import MyOrders from "../Pages/Dashboard/MyOrders";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyProduct from "../Pages/Dashboard/Seller/MyProduct";
import Welcome from "../Pages/Dashboard/Welcome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Shared/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import AllProduct from "../Pages/SingleCategory/AllProduct";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },


            {
                path: "/allProducts",
                element: (
                    <PrivateRoute>
                        <AllProduct></AllProduct>
                    </PrivateRoute>
                ),
            },

            {
                path: "/category/:category_name",
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.category_name}`);
                },
                element: (
                    <PrivateRoute>
                        <SingleCategory></SingleCategory>
                    </PrivateRoute>
                ),
            }

        ]
    },


    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard/",
                element: <Welcome></Welcome>
            },
            {
                path: "/dashboard/myOrders",
                element: <MyOrders></MyOrders>
            },

            {
                path: "/dashboard/addProduct",
                element: <SellerRoute>
                    <AddProduct></AddProduct>
                </SellerRoute>
            },

            {
                path: "/dashboard/myProduct",
                element: <SellerRoute>
                    <MyProduct></MyProduct>
                </SellerRoute>
            },

            {
                path: "/dashboard/allUser",
                element: <AdminRoute>
                    <AllUser></AllUser>
                </AdminRoute>
            },

            {
                path: "/dashboard/seller",
                element: <AdminRoute>
                    <Seller></Seller>
                </AdminRoute>
            },

            {
                path: "/dashboard/buyer",
                element: <AdminRoute>
                    <Buyer></Buyer>
                </AdminRoute>
            },

            {
                path: "/dashboard/allReports",
                element: <AdminRoute>
                    <AllReport></AllReport>
                </AdminRoute>
            },


            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/orders/${params.id}`),
            },



        ],
    },



]);


export default router;



