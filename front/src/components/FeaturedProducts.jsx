import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="feature products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
