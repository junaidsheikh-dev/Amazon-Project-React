import { Routes, Route } from 'react-router'
import { HomePage } from './pages/homepage/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OdersPage } from './pages/orderspage/OrdersPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element = {<HomePage />} />
        <Route path='checkout' element = {<CheckoutPage />} />
        <Route path='orders'  element = {<OdersPage />} />
      </Routes>
    </>
  )
}

export default App
