import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { FaAt, FaKey } from "react-icons/fa";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="login-container">
        <h4 className="heading">Login</h4>

        <FormInput
          type="email"
          placeholder="Email"
          name="identifier"
          defaultValue="test@test.com"
        >
          <FaAt className="size-4 opacity-70" />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          defaultValue="secret"
        >
          <FaKey className="size-4 opacity-70" />
        </FormInput>

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <button type="button" className="btn uppercase btn-secondary btn-block">
          guest user
        </button>

        <p className="mx-auto">
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
  );
};

export default Login;
