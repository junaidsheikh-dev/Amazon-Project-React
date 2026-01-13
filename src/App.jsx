import { Routes, Route } from "react-router";
import { HomePage } from "./pages/homepage/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OdersPage } from "./pages/orderspage/OrdersPage";
import { TrackingPackage } from "./pages/tracking package/Tracking";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OdersPage />} />
        <Route path="tracking" element={<TrackingPackage />} />
      </Routes>
    </>
  );
}

export default App;
