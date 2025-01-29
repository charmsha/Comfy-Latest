import React from "react";
import { formatPrice, generateAmountOptions } from "../utils/index";
import { removeItem, editItem } from "../features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const {
    cartID,
    productID,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  } = cartItem;

  return (
    <article
      key={cartID}
      className="mt-2 flex flex-col gap-y-4 sm:flex-row flex-wrap
    border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      <div className="sm:ml-16 sm:w-48 ">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>

        {/* COMPANY */}
        <h4 className="capitalize text-sm text-neutral-content mt-2 ">
          {company}
        </h4>

        {/* COLOR */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="mt-2 select select-base select-bordered select-sm"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>

        {/* REMOVE */}
        <button
          className="link link-primary link-hover text-sm mt-2"
          onClick={removeItemFromTheCart}
        >
          Remove
        </button>
      </div>

      {/* PRIZE  */}

      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
