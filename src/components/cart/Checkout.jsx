import ShoppingButtons from "./ShoppingButtons";
import { useCartContext } from "../../store/context/CartContext";
import { formatPrice } from "../../utils/helpers";

function Checkout() {
  const { totalAmount } = useCartContext();

  return (
    <section className="mt-14 basis-2/5">
      <div className="mb-5 w-full rounded-md bg-white p-5 text-sm md:static md:mt-0 md:p-8 shadow-md">
        {/* mobile */}
        <div className="mb-5 flex flex-1 justify-between">
          <p className="text-base font-medium md:text-sm xl:text-base 2xl:text-lg">
            مجموع قیمت:
          </p>
          <p className="text-lg text-red-600 md:text-base xl:text-base 2xl:text-lg">
            {formatPrice(totalAmount)} تومان
          </p>
        </div>
        <button
          type="button"
          className="text-sm font-normal text-slate-800 md:hidden xl:text-base 2xl:text-lg"
        >
          کد تخفیف دارید؟
        </button>

        {/* laptop */}
        <div className="mb-10 hidden md:block">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-normal text-slate-800 xl:text-base 2xl:text-lg">
              کد تخفیف:
            </p>

            <form className="flex rounded-md">
              <input
                type="text"
                placeholder="123ABC"
                className="w-24 rounded-tr-md rounded-br-md border border-slate-800 text-center opacity-25 focus:border-none"
              />
              <button
                type="button"
                className="rounded-tl-md rounded-bl-md bg-red-400 py-2 px-4 text-white"
              >
                تایید
              </button>
            </form>
          </div>

          <div className="mb-12  flex justify-between font-medium xl:text-base 2xl:text-lg">
            <p>تخفیف:</p>
            <p className="text-slate-800">0 تومان</p>
          </div>
        </div>
        <div className="hidden justify-between font-medium md:flex xl:text-base 2xl:text-lg">
          <p>قیمت نهایی:</p>
          <p className="text-red-600">{formatPrice(totalAmount)} تومان</p>
        </div>
      </div>

      <ShoppingButtons />
    </section>
  );
}

export default Checkout;
