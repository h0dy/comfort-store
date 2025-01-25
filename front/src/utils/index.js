import axios from "axios";
const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatePrice = (price, type) => {
  const riyalAmount = new Intl.NumberFormat("en-SA", {
    style: "currency",
    currency: "SAR",
  }).format((price / 100).toFixed(2));
  return riyalAmount;
};
