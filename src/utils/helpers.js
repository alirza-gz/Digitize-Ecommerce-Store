import { xiamyLogo, appleLogo, asusLogo, samsungLogo } from "../assets";

export const formatPrice = (price) => {
  let newPrice = String(price)
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g)
    .map(function (x) {
      return x.split("").reverse().join("");
    })
    .reverse()
    .join(",");

  return newPrice;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  // to get an array, instead of an array of arrays
  if (type === "colors") unique = unique.flat();

  // console.log(["all", ...new Set(unique)]);
  return [...new Set(unique)];
};

export const getUniqueCompanies = (allProducts, category) => {
  const productsByCategory = allProducts.filter((product) => product.category === category);
  const uniqueCompanies = getUniqueValues(productsByCategory, "company");
  return uniqueCompanies;
};

export const getLogoCompany = (company) => {
  switch (company) {
    case "سامسونگ":
      return samsungLogo;

    case "اپل":
      return appleLogo;

    case "شیائومی":
      return xiamyLogo;

    case "ایسوس":
      return asusLogo;
  }
};

export const getColorNames = (title) => {
  switch (title) {
    case "bg-red-400":
      return "قرمز";

    case "bg-blue-400":
      return "آبی";

    case "bg-green-400":
      return "سبز";

    case "bg-yellow-400":
      return "زرد";

    case "bg-gray-400":
      return "مشکی";
  }
};
