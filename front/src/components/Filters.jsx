import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, order, price, shipping } = params;
  return (
    <Form className="filter-form">
      {/* SEARCH */}
      <FormInput
        type="search"
        placeholder="search product"
        name="search"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        placeholder="Select Category"
        name="category"
        list={meta.categories}
        defaultValue={category}
      />

      {/* COMPANIES */}
      <FormSelect
        placeholder="Select Company"
        name="company"
        list={meta.companies}
        defaultValue={company}
      />

      {/* ORDER */}
      <FormSelect
        placeholder="Sort By"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />

      {/* PRICE */}
      <FormRange
        label="Select Price"
        name="price"
        size="range-sm"
        price={price}
      />

      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      {/* BUTTONS */}
      <button
        type="submit"
        className="btn btn-primary btn-md text-lg uppercase"
      >
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-md text-lg uppercase">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
