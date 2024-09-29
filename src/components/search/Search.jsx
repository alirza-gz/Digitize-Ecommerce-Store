import { useState } from "react";
import { searchIcon } from "../../assets";
import { useFilterContext } from "../../store/context/FilterContext";

function Search() {
  const {
    filters: { text },
    updateSearch,
  } = useFilterContext();

  return (
    <>
      {/* Mobile */}
      {/* <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white shadow-md md:hidden">
        <img src={searchIcon} alt="search" />
      </div> */}

      {/* Desktop */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white w-1/2 rounded-[4px] md:bg-gray-100 flex shadow-sm md:shadow-none"
      >
        <img src={searchIcon} alt="search" className="p-1.5 md:p-3" />
        <input
          type="search"
          value={text}
          onChange={updateSearch}
          placeholder="جستجوی نام محصول، نام برند، و..."
          className={`bg-white w-full rounded-[4px] border-none md:bg-gray-100 pl-2 text-sm font-normal focus:outline-none focus:ring-0`}
        />
      </form>
    </>
  );
}

export default Search;
