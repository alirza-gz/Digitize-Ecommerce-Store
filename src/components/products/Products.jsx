import { useFilterContext } from "../../store/context/FilterContext";
import { useProductsContext } from "../../store/context/ProductsContext";
import SingleProduct from "../products/SingleProduct";
import Loading from "../UI/Loading";

function Products() {
  const { productsError, isProductsLoading } = useProductsContext();
  const { filteredProducts } = useFilterContext();

  if (isProductsLoading) return <Loading />;

  if (productsError)
    return (
      <main className="col-span-full m-auto mt-40 text-center text-slate-800 md:col-start-4 md:px-6">
        <h1 className="mb-3 text-xl md:text-2xl">خطا در برقراری ارتباط</h1>
        <h3 className="text-base md:text-lg">
          (لطفا فیلترشکن خود را روشن کنید)
        </h3>
      </main>
    );

  if (filteredProducts.length === 0)
    return (
      <main className="col-span-full m-auto mt-40 md:col-start-4">
        <h1 className="text-xl text-slate-800 md:text-2xl">
          محصول موردنظر یافت نشد.
        </h1>
      </main>
    );

  return (
    <section className="col-span-12 md:col-span-9 3xl:col-span-10">
      <div className="mb-24 grid grid-cols-2 gap-x-4 gap-y-8 px-3 lg:px-0 md:grid-cols-3 2xl:grid-cols-4 ">
        {filteredProducts.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
