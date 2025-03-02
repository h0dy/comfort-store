import { Link, useLoaderData } from "react-router-dom";
import { formatePrice } from "../utils/index.jsx";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="products-grid">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const riyalAmount = formatePrice(price);
        return (
          <Link
            className="product-card"
            to={`/products/${product.id}`}
            key={product.id}
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wide">{title}</h2>
              <h3 className="capitalize text-neutral-content text-md">
                {company}
              </h3>
              <span className="text-secondary">{riyalAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
