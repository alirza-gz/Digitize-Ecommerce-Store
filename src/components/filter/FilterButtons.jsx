import { sortPhone, arrow, filterIcon } from "../../assets";
import { useFilterContext } from "../../store/context/FilterContext";
import { useProductsContext } from "../../store/context/ProductsContext";

function FilterButtons() {
  const { openFilterModal, openSortModal } = useProductsContext();
  const { sort } = useFilterContext();

  return (
    <div className="mb-6 flex gap-4 px-3 text-xs font-bold text-slate-800 2xs:text-sm xs:mb-8 md:hidden">
      <div
        onClick={openSortModal}
        className="flex w-full cursor-pointer items-center justify-start rounded-md bg-white px-2 py-2.5 md:hidden"
      >
        <div className="ml-1 flex items-center">
          <img src={sortPhone} alt="sort" className="-ml-1" />
          <img src={arrow} alt="arrow" className="h-4" />
        </div>
        <span>{sort}</span>
      </div>

      <div
        onClick={openFilterModal}
        className="flex w-full cursor-pointer items-center justify-start rounded-md bg-white p-2 md:hidden"
      >
        <img src={filterIcon} alt="filter" className="ml-1" />
        <span>فیلتر</span>
      </div>
    </div>
  );
}

export default FilterButtons;
