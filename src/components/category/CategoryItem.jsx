import { useFilterContext } from "../../store/context/FilterContext";
import { getLogoCompany } from "../../utils/helpers";
import { Link } from "react-router-dom";

function CategoryItem({ logo, title, companies }) {
  const { updateCategory, updateCompanies } = useFilterContext();

  return (
    <div className="flex items-end gap-2 text-slate-700">
      <div className="flex h-56 w-[146px] min-w-[146px] max-w-[146px] flex-col items-center justify-between overflow-hidden rounded-[10px] bg-gray-200">
        <span className="mt-6 text-sm">{title}</span>
        <div className="relative h-40 w-40 rounded-[10px]">
          <img src={logo} alt="phones" className="mx-auto" />
        </div>
      </div>
      <div className="flex h-56 flex-col justify-between overflow-hidden">
        <Link
          to="/"
          onClick={() => updateCategory(title)}
          className="self-end text-sm text-red-400 md:text-base"
        >
          مشاهده همه
        </Link>

        <div className="flex gap-2 overflow-auto">
          {companies.map((company, index) => (
            <div
              onClick={() => updateCompanies(company)}
              key={index}
              className="mb-3 flex h-40 flex-col items-center justify-between rounded-[10px] bg-white px-8 py-5 shadow-md"
            >
              <div className="w-16">
                <img
                  src={getLogoCompany(company)}
                  alt={company}
                  className={`${
                    company === "ایسوس"
                      ? "pt-5"
                      : company === "سامسونگ"
                      ? "pt-6"
                      : company === "اپل"
                      ? "pt-0"
                      : "pt-2"
                  }`}
                />
              </div>
              <span className="text-sm">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
