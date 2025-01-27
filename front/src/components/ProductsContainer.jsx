import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const { total } = meta.pagination;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    } `;
  };

  return (
    <>
      {/* HEADER */}
      <div className="products-container">
        <h4 className="font-medium text-base">
          {total} Product{total > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill className="" />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <FaList className="size-6" />
          </button>
        </div>
      </div>
      {/* PRODUCT */}
      <div className="">
        {total === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products matched....</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
