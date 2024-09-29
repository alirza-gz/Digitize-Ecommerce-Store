import Filters from "../filter/Filters";
import { categories } from "../../data";
import { NavLink } from "react-router-dom";
import { useFilterContext } from "../../store/context/FilterContext";

function Sidebar() {
  const { updateCategory } = useFilterContext();

  return (
    <aside className="col-span-3 row-span-2 hidden md:block 3xl:col-span-2">
      <div className="scrollbar sticky top-[108px] max-h-[calc(100vh_-_160px)] overflow-y-auto overflow-x-hidden rounded-md bg-white p-5 pb-8">
        {/* category */}
        <div className="mb-5">
          <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">
            دسته‌‌بندی
          </span>

          <div className="mb-1 text-xs lg:text-sm">
            {categories.map((category) => {
              const { id, title, icon, path } = category;

              return (
                <NavLink
                  key={id}
                  to={`/categories${path}`}
                  name="category"
                  onClick={() => updateCategory(title)}
                  className={({ isActive }) => {
                    return `mb-4 flex items-end py-2 px-1 rounded-md hover:bg-gray-50 ${
                      isActive ? "text-slate-800" : "text-gray-400 "
                    }`;
                  }}
                >
                  <img src={icon} alt={title} className="ml-2" />
                  <p>{title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* divider */}
        <hr className="mb-3 bg-gray-50 opacity-25" />

        <Filters />
      </div>
    </aside>
  );
}

export default Sidebar;
