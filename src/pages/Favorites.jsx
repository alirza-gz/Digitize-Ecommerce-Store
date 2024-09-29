import { useFilterContext } from "../store/context/FilterContext";
import PageHero from "../components/UI/PageHero";
import SingleProduct from "../components/products/SingleProduct";
import { favorites } from "../assets";

function Favorites() {
  const { favoriteProducts } = useFilterContext();

  return (
    <main className="container mx-auto 2xl:max-w-screen-2xl min-h-screen md:min-h-[calc(100vh-8rem)]">
      <PageHero title="علاقه‌مندی" />

      {favoriteProducts.length === 0 && (
        <section className="px-6 pt-36 md:pt-60 flex flex-col items-center justify-center gap-y-5">
          <img src={favorites} alt="favorties" className="w-36"/>
          <h1 className="text-center text-lg text-slate-800">
            آیتم موردعلاقه ای وجود ندارد.
          </h1>
        </section>
      )}

      {favoriteProducts.length > 0 && (
        <section className="container mx-auto 2xl:max-w-screen-2xl col-span-12 pb-24 grid grid-cols-2 gap-x-4 gap-y-8 md:col-span-9 md:pt-28 md:pb-10 md:grid-cols-3 2xl:grid-cols-4 3xl:col-span-10 px-3">
          {favoriteProducts.map((item) => (
            <SingleProduct key={item.id} {...item} />
          ))}
        </section>
      )}
    </main>
  );
}

export default Favorites;
