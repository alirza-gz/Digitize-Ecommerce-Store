import { Link } from "react-router-dom";
import { leftArrow } from "../../assets";
import { useFilterContext } from "../../store/context/FilterContext";

function BreadCrumbs({ category, company, title }) {
  const { updateCategory, updateCompanies } = useFilterContext();

  return (
    <div className="mb-8 w-full items-center gap-[3%] rounded-md bg-transparent px-3 text-xs font-normal text-gray-300 x:text-sm md:flex md:bg-white md:p-3 md:text-sm lg:text-sm">
      <div className="flex items-center gap-2 text-red-400">
        <h3>
          <Link to="/" onClick={() => updateCategory(category)}>
            {category}
          </Link>
        </h3>
        <img src={leftArrow} alt="" />
        <h3>
          <Link to="/">برند {company}</Link>
        </h3>
        <img src={leftArrow} alt="" />
        <h3 className="text-slate-800">{title}</h3>
      </div>
    </div>
  );
}

export default BreadCrumbs;
