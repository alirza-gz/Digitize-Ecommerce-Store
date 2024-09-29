import { FiX } from "react-icons/fi";
import { formatPrice } from "../../utils/helpers";
import { useCartContext } from "../../store/context/CartContext";

function SingleCartItem({ image, title, price, id, color, amount }) {
  const { removeItem, toggleAmount } = useCartContext();

  return (
    <div className="flex justify-between border-gray-100 bg-white last:border-none md:border-b md:p-4">
      <div className="flex gap-2">
        <div className="grid place-items-center">
          <img src={image} alt="" className="w-14 md:w-20" />
        </div>

        <div className="flex flex-col gap-6 py-2 text-xs 2xs:text-sm md:gap-6">
          <div className="flex items-center gap-1.5 md:gap-2">
            <p>{title}</p>
            {/* color */}
            <div
              className={`h-3 w-3 rounded-full ${color} 2xs:h-4 2xs:w-4`}
            ></div>
          </div>
          {/* price */}
          <p className="text-red-600">{formatPrice(price * amount)} تومان</p>
        </div>
      </div>

      <div className="flex flex-col justify-between py-1">
        <button
          onClick={() => removeItem(id)}
          className="flex justify-end font-light text-red-500 md:text-lg"
        >
          <FiX />
        </button>
        <div className="flex items-center gap-x-2">
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-gray-300 pt-0.5 text-lg"
            onClick={() => toggleAmount(id, "inc")}
          >
            +
          </button>
          <span className="grid h-7 w-6 place-content-center border border-red-300 p-2 rounded-md">
            {amount}
          </span>
          <button
            className="grid h-5 w-5 place-content-center rounded-full bg-red-200 pt-0.5 text-red-500 text-2xl"
            onClick={() => toggleAmount(id, "dec")}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCartItem;
