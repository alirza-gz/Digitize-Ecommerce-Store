import { Link } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";

function CartItems({ cart }) {
  return (
    <section className="mb-8 mt-1 h-2/3 rounded-md md:basis-3/5 md:mb-0">
      {/* mobile */}
      <div className="md:hidden">
        {cart.map((item) => (
          <div
            key={item.id}
            className="mb-3 rounded-md bg-white p-3 text-sm shadow md:mb-0 md:hidden"
          >
            <SingleCartItem {...item} />
          </div>
        ))}
      </div>

      {/* laptop */}
      <div className="mb-3 hidden items-center justify-between bg-transparent px-3 py-1.5 md:flex">
        <Link to="/" className="text-lg font-medium text-slate-800">
          سبد‌ خرید
        </Link>
        <Link to="/" className="text-sm text-red-400">
          بازگشت به خانه
        </Link>
      </div>
      <div className="hidden flex-col rounded-md bg-white p-3 text-sm md:flex shadow-md">
        {cart.map((item) => (
          <SingleCartItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CartItems;
