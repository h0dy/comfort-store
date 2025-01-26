import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatePrice = (price) => {
  const riyalAmount = new Intl.NumberFormat("en-SA", {
    style: "currency",
    currency: "SAR",
  }).format((price / 100).toFixed(2));
  return riyalAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, idx) => {
    const amount = idx + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
