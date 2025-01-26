import { useLoaderData, Link } from "react-router-dom";
import {
  formatePrice,
  customFetch,
  generateAmountOptions,
} from "../utils/index.jsx";
import { useState } from "react";

export const loader = async ({ params }) => {
  const res = await customFetch(`/products/${params.id}`);
  return { product: res.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);

  const riyalAmount = formatePrice(price);

  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link className="capitalize" to={`/products/${product.id}`}>
              {title}
            </Link>
          </li>
        </ul>
      </div>

      {/* PRODUCT */}
      <div className="single-product-container">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="size-96 object-cover rounded-lg lg:w-full"
        />

        {/* PRODUCT INFO */}
        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content mt-2">{company}</h4>
          <p className="mt-3 text-xl">{riyalAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge size-6 mr-2 ${
                      color === productColor && `border-2 border-secondary`
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* AMOUNT */}

          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md text-lg"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>

          {/* CART BTN */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => console.log(product)}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
