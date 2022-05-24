import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentSlipCheckout from "../Pages/PaymentSlipCheckout/PaymentSlipCheckout";
import PaymentOptions from "../Pages/PaymentOptions/PaymentOptions";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PaymentSlipUser from "../Pages/PaymentSlipUser/PaymentSlipUser";
import StatusUserPaymentSlip from "../Pages/StatusUserPaymentSlip/StatusUserPaymentSlip";
import StatusPaymentSlipCheckout from "../Pages/StatusPaymentSlipCheckout/StatusPaymentSlipCheckout";
import StatusPaymentUserCard from "../Pages/StatusUserPaymentCard/StatusPaymentUserCard";
import PaymentCardUser from "../Pages/PaymentCardUser/PaymentCardUser";
import PaymentCardCheckout from "../Pages/PaymentCardCheckout/PaymentCardCheckout";
import StatusPaymentCardCheckout from "../Pages/StatusPaymentCardCheckout/StatusPaymentCardCheckout";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/paymentSlipCheckout"
            element={<PaymentSlipCheckout />}
          />
          <Route exact path="/paymentOptions" element={<PaymentOptions />} />
          <Route
            exact
            path="/statusUserPaymentSlip"
            element={<StatusUserPaymentSlip />}
          />
          <Route
            exact
            path="/statusPaymentSlipCheckout"
            element={<StatusPaymentSlipCheckout />}
          />
          <Route exact path="/paymentSlipUser" element={<PaymentSlipUser />} />
          <Route
            exact
            path="/statusPaymentUserCard"
            element={<StatusPaymentUserCard />}
          />
          <Route
            exact
            path="/statusPaymentCardCheckout"
            element={<StatusPaymentCardCheckout />}
          />
          <Route exact path="/paymentCardUser" element={<PaymentCardUser />} />
          <Route
            exact
            path="/paymentCardCheckout"
            element={<PaymentCardCheckout />}
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
