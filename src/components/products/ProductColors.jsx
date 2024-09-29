import { tick } from "../../assets";

function ProductColors({
  colors,
  width,
  height,
  singleProduct,
  mainColor,
  setMainColor,
}) {
  return (
    <div
      className={`grid grid-cols-[repeat(4,0.8rem)] ${
        singleProduct ? "grid-cols-[repeat(4,1.5rem)]" : ""
      }`}
    >
      {colors.map((color, index) => {
        return (
          <span
            key={index}
            onClick={() => setMainColor(color)}
            className={`-mx-1 rounded-full z-[5] border-2 border-white flex items-center justify-center${
              singleProduct &&
              " cursor-pointer hover:translate-x-1 transition-all duration-300 "
            } ${width} ${height} ${
              singleProduct && mainColor === color
                ? "ring-2 ring-slate-700 translate-x-1"
                : "border-[2px] border-white"
            } ${color}`}
          >
            {singleProduct && mainColor === color ? (
              <img src={tick} alt="tick" />
            ) : (
              ""
            )}
          </span>
        );
      })}
    </div>
  );
}

export default ProductColors;
