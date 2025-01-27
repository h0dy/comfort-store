import { Link, useLoaderData } from "react-router-dom";
import { formatePrice } from "../utils/index.jsx";

const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="products-list">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const riyalAmount = formatePrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="product-item group"
          >
            <img src={image} alt={title} className="product-image" />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-neutral-content text-md">
                {company}
              </h4>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                {riyalAmount}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
