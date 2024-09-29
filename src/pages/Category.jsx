import { phoneCategory, laptopCategory, watchCategory } from "../assets";
import { getUniqueCompanies } from "../utils/helpers";
import { useFilterContext } from "../store/context/FilterContext";
import PageHero from "../components/UI/PageHero";
import CategoryItem from "../components/category/CategoryItem";

function Category() {
  const { allProducts } = useFilterContext();

  const uniquePhoneCompanies = getUniqueCompanies(allProducts, "تلفن‌همراه");
  const uniqueLaptopCompanies = getUniqueCompanies(allProducts, "لپ‌تاپ");
  const uniqueWatchCompanies = getUniqueCompanies(allProducts, "ساعت‌هوشمند");

  return (
    <main className="md:mt-[92px] container mx-auto 2xl:max-w-screen-2xl">
      <PageHero title="دسته‌بندی" />

      <section className="pb-24 mt-6 px-3 md:pb-8 md:mt-32 md:px-4">
        <CategoryItem
          logo={phoneCategory}
          title="تلفن‌همراه"
          companies={uniquePhoneCompanies}
        />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem
          logo={laptopCategory}
          title="لپ‌تاپ"
          companies={uniqueLaptopCompanies}
        />
        <div className="my-4 h-[0.5px] w-2/3 bg-gray-200"></div>
        <CategoryItem
          logo={watchCategory}
          title="ساعت‌هوشمند"
          companies={uniqueWatchCompanies}
        />
      </section>
    </main>
  );
}

export default Category;
