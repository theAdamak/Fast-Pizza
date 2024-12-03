import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import MenuLoader from "./features/menu/MenuLoader";
// import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        MenuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      // { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
