import { useCartContext } from "../../store/context/CartContext";

function Badge() {
  const { totalItems } = useCartContext();

  return (
    <div
      className={`absolute ${
        totalItems === 1 ? "px-[9px]" : "px-2"
      } -top-1 right-5 flex items-center justify-center rounded-full bg-red-500 py-0.5 text-xs md:right-3.5 md:-top-2`}
    >
      <span className="inline-block pt-0.5 text-center text-white">
        {totalItems}
      </span>
    </div>
  );
}

export default Badge;
