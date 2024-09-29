import { useState } from "react";
import Checkbox from "../UI/Checkbox";
import PriceRange from "../UI/PriceRange";
import { filterCompIcon, filterColorsIcon, filterPriceIcon } from "../../data.jsx";
import { getUniqueValues } from "../../utils/helpers.js";
import { FiChevronDown } from "react-icons/fi";
import { useFilterContext } from "../../store/context/FilterContext.jsx";

function Filters() {
  const [isActive, setIsActive] = useState({
    filterCompanies: false,
    filterColors: false,
    filterPrice: false,
  });

  const {
    allProducts,
    filters: { companies, colors },
    updateCompanies,
    updateColors,
  } = useFilterContext();

  const uniqueCompanies = getUniqueValues(allProducts, "company");
  const uniqueColors = getUniqueValues(allProducts, "colors");

  return (
    <section>
      <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">
        فیلتر
      </span>

      {/* companies */}
      <div
        className={`mb-3 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm py-2 px-1 rounded-md hover:bg-gray-50`}
        onClick={() =>
          setIsActive({
            ...isActive,
            filterCompanies: !isActive.filterCompanies,
          })
        }
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterCompIcon}
          <span>برند‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterCompanies && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterCompanies ? "block" : "hidden"}`}>
        {uniqueCompanies.map((title, index) => {
          return (
            <Checkbox
              key={index}
              title={title}
              checked={companies.indexOf(title) === -1 ? false : true}
              onChange={() => updateCompanies(title)}
            />
          );
        })}
      </div>
      {/* end of companies */}

      {/* colors */}
      <div
        className={`mb-3 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm py-2 px-1 rounded-md hover:bg-gray-50`}
        onClick={() =>
          setIsActive({ ...isActive, filterColors: !isActive.filterColors })
        }
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterColorsIcon}
          <span>رنگ‌محصول</span>
        </div>
        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterColors && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterColors ? "block" : "hidden"}`}>
        {uniqueColors.map((title, index) => {
          return (
            <Checkbox
              key={index}
              title={title}
              checked={colors.indexOf(title) === -1 ? false : true}
              onChange={() => updateColors(title)}
              color
            />
          );
        })}
      </div>
      {/* end of colors */}

      {/* price */}
      <div
        className={`mb-3 flex cursor-pointer items-end justify-between text-sm text-slate-800 md:text-xs lg:text-sm py-2 px-1 rounded-md hover:bg-gray-50`}
        onClick={() =>
          setIsActive({ ...isActive, filterPrice: !isActive.filterPrice })
        }
      >
        <div className="mr-1.5 flex items-end gap-2">
          {filterPriceIcon}
          <span>محدوده‌ قیمت</span>
        </div>

        <FiChevronDown
          className={`text-slate-800 transition-all duration-500 ${
            isActive.filterPrice && "rotate-180"
          }`}
        />
      </div>

      <div className={`${isActive.filterPrice ? "block" : "hidden"}`}>
        <PriceRange />
      </div>
      {/* end of price */}
    </section>
  );
}

export default Filters;
