import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { sellerIcon, warrantyIcon, deliveryIcon } from "../../data";
import { useCartContext } from "../../store/context/CartContext";

function AddToCart({ price, id, title, image, color }) {
  const { addToCart } = useCartContext();

  return (
    <>
      {/* mobile */}
      <section className="flex items-center gap-[12%] rounded-lg bg-white px-3 py-2 md:hidden">
        <Link
          to="/cart"
          onClick={() => addToCart({ id, price, title, image, color })}
          className="block w-full rounded bg-red-400 py-3 px-2 text-center text-sm text-white 2xs:px-6 x:text-base md:hidden"
        >
          افزودن به سبد خرید
        </Link>

        <div className="flex">
          <p className="w-full font-semibold text-slate-800 x:text-lg">
            {formatPrice(price)}{" "}
            <span className="text-sm font-normal">تومان</span>
          </p>
        </div>
      </section>

      {/* laptop */}
      <div className="w-full 2xl:w-3/5">
        <div className="hidden rounded bg-gray-50 p-4 md:block">
          <div className="mb-16">
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {sellerIcon}
                <span>فروشنده:</span>
              </div>
              <span>دیجی تایز</span>
            </div>
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {warrantyIcon}
                <span>گارانتی:</span>
              </div>
              <span>18 ماه زرین خدمت</span>
            </div>
            <div className="mb-4 flex gap-3 text-xs x:text-sm md:text-xs lg:text-sm">
              <div className="flex items-center gap-1">
                {deliveryIcon}
                <span>ارسال توسط:</span>
              </div>
              <span>انبار تهران</span>
            </div>
          </div>

          <div className="text-left">
            <p className="mb-2 text-2xl font-semibold text-red-400 md:text-xl lg:text-2xl">
              {formatPrice(price)}{" "}
              <span className="text-base font-normal md:text-sm lg:text-base">
                تومان
              </span>
            </p>
            <Link
              to="/cart"
              onClick={() => addToCart({ id, price, title, image, color })}
              className="block w-full rounded bg-red-400 px-2 py-3 text-center text-[#fdfdfd] md:text-sm lg:text-base"
            >
              افزودن به سبد خرید
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
