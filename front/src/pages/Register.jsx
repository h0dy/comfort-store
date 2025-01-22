import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
import { FaUser, FaAt, FaKey } from "react-icons/fa";

const Register = () => {
  return (
    <section className="register-container">
      <Form method="POST" className="register-form">
        <h4 className="heading">Register</h4>
        <FormInput type="text" placeholder="Username" name="username">
          <FaUser className="opacity-70 size-4" />
        </FormInput>

        <FormInput type="email" placeholder="Email" name="email">
          <FaAt className="size-4 opacity-70" />
        </FormInput>

        <FormInput type="password" placeholder="Password" name="password">
          <FaKey className="size-4 opacity-70" />
        </FormInput>

        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="mx-auto">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
