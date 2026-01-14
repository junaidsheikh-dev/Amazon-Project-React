import { Routes, Route } from "react-router";
import { HomePage } from "./pages/homepage/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OdersPage } from "./pages/orderspage/OrdersPage";
import { TrackingPackage } from "./pages/trackpackage/Tracking";
import { PageNotFound } from "./pages/404 page/404page";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OdersPage />} />
        <Route path="tracking" element={<TrackingPackage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
