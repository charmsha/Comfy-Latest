import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/index";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 flex flex-column rounded sm:flex-row gap-y-4 flex-wrap 
            bg-base-100 shadow-xl hover:shadow-2xl duration-300 group "
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded sm:h-32 sm:w-32 object-cover group-hover:scale-105 
              transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h3 className="capitalize font-medium text-neutral-content">
                {company}
              </h3>
            </div>

            <span className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarsAmount}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
