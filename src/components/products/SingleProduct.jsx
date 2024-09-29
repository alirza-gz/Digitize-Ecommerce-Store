import ProductColors from "./ProductColors";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { formatPrice } from "../../utils/helpers";
import { useFilterContext } from "../../store/context/FilterContext";
import { TbShoppingCartPlus } from "react-icons/tb";

function SingleProduct({ image, company, id, price, title, colors, isLiked }) {
  const { updateFavorites } = useFilterContext();

  return (
    <div className="rounded-lg bg-white p-1.5 text-sm shadow-md">
      {/* image */}
      <div className="relative mb-4 flex items-center justify-center rounded-lg bg-gray-100">
        {/* like button */}
        <button
          className="absolute top-2 right-2 rounded-full bg-gray-200 p-1.5 px-2 sm:py-2.5"
          onClick={() => updateFavorites(id)}
        >
          <FiHeart
            className={`w-3 sm:w-5 ${
              isLiked
                ? "fill-red-400 stroke-red-400"
                : "fill-transparent stroke-gray-500"
            }`}
          />
        </button>
        <div className="my-2 w-40">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="px-2">
        {/* colors */}
        <div className="mb-2 flex justify-between">
          <span className="text-xs font-light text-gray-300 2xl:text-sm">
            {company}
          </span>
          <ProductColors colors={colors} width="w-4" height="h-4" />
        </div>

        {/* title */}
        <div className="mb-1 border-b border-gray-100 pb-2">
          <p className="mb-2 flex items-center justify-start text-[10px] text-slate-800 2xs:text-xs xs:text-[13px] xl:text-sm 2xl:text-[15px]">
            {title}
          </p>
          <p className="flex items-center justify-end text-[11px] text-red-600 2xs:text-[12px] xs:text-sm 2xl:text-[15px]">
            {formatPrice(price)} تومان
          </p>
        </div>

        {/* order */}
        <Link
          to={`/products/${id}`}
          className="mx-auto flex w-full items-center justify-center py-2 text-center text-[11px] text-red-400 2xs:text-[12px] xs:text-sm xs:text-[14px] 2xl:text-base hover:scale-[1.02] hover:text-red-500 transition-all duration-300"
        >
          مشاهده و ثبت سفارش
          <TbShoppingCartPlus className="mr-1"/>
        </Link>
      </div>
    </div>
  );
}

export default SingleProduct;
