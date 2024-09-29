import { Link } from "react-router-dom";

function ShoppingButtons() {
  return (
    <div className="mb-20">
      <Link to="/login">
        <button
          type="button"
          className="mb-3 block w-full rounded bg-red-400 p-3.5 text-center text-white md:static md:w-full"
        >
          ادامه فرایند خرید
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          className="hidden w-full rounded border-2 border-red-400 bg-transparent p-2.5 text-center text-red-400 md:block"
        >
          انصراف از خرید
        </button>
      </Link>
    </div>
  );
}

export default ShoppingButtons;
