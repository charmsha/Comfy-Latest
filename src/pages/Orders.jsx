import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../components";

const orderQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn:()=>customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
  };
};

export const loader =
  (store,queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must logged in to view orders");
      return redirect("/login");
    }
    console.log(request);

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(orderQuery(params,user))
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "Please check your credential";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }

    return null;
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
