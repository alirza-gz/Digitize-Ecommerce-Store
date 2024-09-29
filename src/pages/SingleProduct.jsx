import { useState } from "react";
import { useProductsContext } from "../store/context/ProductsContext";
import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import PageHero from "../components/UI/PageHero";
import ProductColors from "../components/products/ProductColors";
import BreadCrumbs from "../components/UI/BreadCrumbs";
import ProductImages from "../components/products/ProductImages";
import ProductShipping from "../components/products/ProductShipping";
import ProductFeatures from "../components/products/ProductFeatures";
import AddToCart from "../components/cart/AddToCart";

function SingleProduct() {
  const { singleProduct, fetchSingleProduct, products } = useProductsContext();

  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  const [mainColor, setMainColor] = useState(product.colors.at(-1));
  const [amount, setAmount] = useState(1);

  return (
    <main className="md:mt-[77px] container mx-auto 2xl:max-w-screen-2xl md:px-6">
      <PageHero title={product.title} back />

      <section className="pb-20 md:pb-10 pt-6">
        <BreadCrumbs {...product} />

        <div className="gap-[5%] py-2 px-3 x:p-6 md:flex md:rounded-md md:bg-white md:py-8 md:px-3 lg:p-10">
          <ProductImages {...product} />
          <div className="w-full">
            <div className="mb-10 flex flex-col items-center justify-center text-slate-800 md:mb-5 md:items-start">
              <h1 className="mb-1 text-lg font-bold x:text-xl md:text-lg lg:text-xl">
                {product.title}
              </h1>
              <h2 className="font-light x:text-lg md:text-base lg:text-lg">
                Iphone 13 128 GB
              </h2>
            </div>

            {/* divider */}
            <div className="hidden h-[1px] bg-gray-200 md:block"></div>

            <section>
              <div className="mb-7 flex items-center justify-center gap-[10%] md:mb-3 md:mt-5 md:justify-start">
                <span className="text-slate-800 x:text-lg md:text-base lg:text-lg">
                  انتخاب رنگ:
                </span>
                <div>
                  <ProductColors
                    colors={product.colors}
                    width="w-7"
                    height="h-7"
                    singleProduct
                    mainColor={mainColor}
                    setMainColor={setMainColor}
                  />
                </div>
              </div>
            </section>

            <ProductShipping />
            <ProductFeatures />
          </div>

          <AddToCart
            price={formatPrice(product.price)}
            {...product}
            color={mainColor}
            amount={amount}
          />
        </div>
      </section>
    </main>
  );
}

export default SingleProduct;
