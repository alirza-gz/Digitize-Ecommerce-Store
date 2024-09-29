import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import Login from "./pages/Login";
import AppLayout from "./components/UI/AppLayout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />}>
            <Route path="/categories/:category" element={<Home />} />
          </Route>
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
