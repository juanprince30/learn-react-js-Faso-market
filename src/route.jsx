import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainOutlet from "./components/MainOutlet";
import ProductDetail from "./components/Product/ProductDetail";


const router=createBrowserRouter([
    {
        element:<MainLayout />,
        children:[
            {
                path:"/",
                element:<MainOutlet/>,
            },
            {
                path:"/product/:product_id",
                element:<ProductDetail/>,
            }
        ]
    }
])

export default router;

