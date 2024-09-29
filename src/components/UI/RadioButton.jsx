import { useFilterContext } from "../../store/context/FilterContext";

function RadioButton({ title }) {
  const { sort, updateSort } = useFilterContext();

  return (
    <div className="my-5 mr-1.5 flex items-center">
      <input
        type="radio"
        id={title}
        value={title}
        name="sort"
        checked={sort === title ? true : false}
        onChange={updateSort}
        className="form-radio h-3 w-3 text-red-400 focus:text-red-400 focus:ring-0 focus:ring-offset-0"
      />

      <label
        htmlFor={title}
        className="mr-2 w-full cursor-pointer pl-[120px] text-sm text-slate-800"
      >
        {title}
      </label>
    </div>
  );
}

export default RadioButton;
