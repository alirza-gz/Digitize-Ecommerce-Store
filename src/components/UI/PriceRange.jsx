import { useFilterContext } from "../../store/context/FilterContext";
import { formatPrice } from "../../utils/helpers";

function PriceRange() {
  const {
    filters: { price, maxPrice, minPrice },
    updatePrice,
  } = useFilterContext();

  return (
    <div className="-mt-2 text-[13px] text-slate-800 lg:text-sm">
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        step="50000"
        value={price}
        onChange={updatePrice}
        className="h-[1.5px] w-full rotate-180 cursor-pointer appearance-none bg-red-300 accent-red-400"
      />

      <div className="flex items-center justify-between gap-x-1">
        <span className="text-xs">{formatPrice(maxPrice)}</span>
        <span className="mt-1 rounded border border-red-400 bg-[#f4f4f4] px-2 py-0.5 text-red-400 text-[0.8rem]">
          {formatPrice(price)}
        </span>
        <span className="text-xs">{formatPrice(minPrice)}</span>
      </div>
    </div>
  );
}

export default PriceRange;
