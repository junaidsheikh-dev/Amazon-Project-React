import axios from "axios";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/homepage/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OdersPage } from "./pages/orderspage/OrdersPage";
import { TrackingPackage } from "./pages/trackpackage/Tracking";
import { PageNotFound } from "./pages/404 page/404page";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Cart, setCart] = useState([]);

  useEffect(() => {
    async function getCartItems (){
      try{
        const response = await axios.get('api/cart-items')
        setCart(response.data)
      }catch(error){
        console.error(error.response?.data || error.message)
      }
    }
    getCartItems();

  }, [])
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={Cart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={Cart}/>} />
        <Route path="orders" element={<OdersPage />} />
        <Route path="tracking" element={<TrackingPackage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
