import React from "react";
import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  console.log(user);
  
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("./login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
