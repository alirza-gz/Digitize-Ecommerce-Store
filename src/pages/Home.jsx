import { useProductsContext } from "../store/context/ProductsContext";
import { useFilterContext } from "../store/context/FilterContext";
import PageHero from "../components/UI/PageHero";
import Sidebar from "../components/sidebar/Sidebar";
import Sortbar from "../components/sort/Sortbar";
import Products from "../components/products/Products";
import FilterButtons from "../components/filter/FilterButtons";
import Filters from "../components/filter/Filters";
import Modal from "../components/modal/Modal";
import SortModal from "../components/sort/SortModal";

function Home() {
  const { isFilterModalOpen, isSortModalOpen, closeModal } =
    useProductsContext();
  const { clearFilters, clearSort } = useFilterContext();

  const clearFilterHandler = () => {
    closeModal();
    clearFilters();
  };

  const clearSortHandler = () => {
    closeModal();
    clearSort();
  };

  return (
    <main className="md:mt-[77px] container mx-auto 2xl:max-w-screen-2xl min-h-screen md:min-h-0">
      <PageHero title="محصولات" />
      <FilterButtons />

      <section className=" grid grid-cols-12 gap-x-5 gap-y-10 md:grid-rows-[55px_minmax(200px,_1fr)] md:py-8">
        {isFilterModalOpen && (
          <Modal onClose={closeModal}>
            <Filters />
            <div className="mt-12 flex gap-4 md:hidden">
              <button
                type="button"
                onClick={closeModal}
                className="flex w-full items-center justify-center rounded-md border-2 border-red-400 bg-red-400 p-2 text-white"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={clearFilterHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#fc5d5d] bg-[#ffd1d1] p-2 text-base text-red-400"
              >
                لغو فیلتر
              </button>
            </div>
          </Modal>
        )}

        {isSortModalOpen && (
          <Modal onClose={closeModal}>
            <SortModal />
            <div className="mt-12 flex gap-4 md:hidden">
              <button
                type="button"
                onClick={closeModal}
                className="flex w-full items-center justify-center rounded-md border-2 border-red-400 bg-red-400 p-2 text-white"
              >
                تایید
              </button>
              <button
                type="button"
                onClick={clearSortHandler}
                className="flex w-full items-center justify-center rounded-md border-2 border-[#fc5d5d] bg-[#ffcbcb] p-2 text-red-400"
              >
                لغو فیلتر
              </button>
            </div>
          </Modal>
        )}

        <Sidebar />
        <Sortbar />
        <Products />
      </section>
    </main>
  );
}

export default Home;
