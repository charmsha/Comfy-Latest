import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);

    const newData = Object.fromEntries(formData);
    console.log(newData);

    const dispatch = useDispatch();
    try {
      const response = await customFetch.post("/auth/local", newData);
      console.log(response);
      store.dispatch(loginUser(response.newData));

      toast.success("logged in successfully");
      return redirect("/");
      // return null;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "Please check your credential";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch("/auth/local", {
        identifier: "james4@gmail.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error");
    }
  };

  return (
    <>
      <section className="h-screen grid place-items-center">
        <Form
          method="post"
          className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        >
          <h4 className="text-center text-3xl font-bold">Login</h4>
          <FormInput type="email" label="email" name="identifier" />
          <FormInput type="password" label="password" name="password" />

          <div className="mt-4">
            <SubmitBtn text="login"></SubmitBtn>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={loginAsGuestUser}
          >
            guest user
          </button>
          <p className="text-center">
            Not a member yet?
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >
              register
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
};

export default Login;
