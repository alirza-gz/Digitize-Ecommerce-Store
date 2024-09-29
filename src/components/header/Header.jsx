import { NavLink, Link } from "react-router-dom";
import { categories } from "../../data";
import Search from "../search/Search";
import Badge from "../UI/Badge";
import { CgShoppingBag } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { logoDesk } from "../../assets";
import { useFilterContext } from "../../store/context/FilterContext";
import { useCartContext } from "../../store/context/CartContext";

function Header() {
  const { updateCategory, clearFilters, favoriteProducts } = useFilterContext();
  const { totalItems } = useCartContext();

  return (
    <header className="fixed left-0 top-0 right-0 z-50 hidden bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-md md:block">
      <div className="container mx-auto 2xl:max-w-screen-2xl px-6">
        <nav className="flex items-center justify-between">
          <ul className="flex items-center justify-between gap-4 lg:gap-5 lg:text-base xl:gap-6 xl:text-lg">
            <img src={logoDesk} alt="Digitize" className="w-20" />

            <NavLink
              to="/"
              onClick={clearFilters}
              className="py-2 px-3 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              خانه
            </NavLink>
            {categories.map((category) => {
              const { id, title, path } = category;
              return (
                <NavLink
                  className="py-2 px-3 rounded-md hover:bg-gray-100 transition-all duration-300"
                  to={`/categories${path}`}
                  key={id}
                  onClick={() => updateCategory(title)}
                >
                  {title}
                </NavLink>
              );
            })}
          </ul>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Search />
            {/* cart and favorite icons */}
            <div className="flex gap-4 border-r-2 pr-3 border-slate-300">
              <Link to="/favorites" className="py-2">
                {favoriteProducts.length === 0 && (
                  <FiHeart className="text-2xl text-slate-700" />
                )}
                {favoriteProducts.length > 0 && (
                  <FaHeart className="text-2xl text-slate-700" />
                )}
              </Link>
              <Link to="/cart" className="py-2">
                <span className="relative">
                  <CgShoppingBag className="text-2xl text-slate-700" />
                  {totalItems > 0 && <Badge />}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
