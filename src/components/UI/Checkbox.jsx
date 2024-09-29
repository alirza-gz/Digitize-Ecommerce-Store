
import { getColorNames } from "../../utils/helpers";

function Checkbox({ title, color, checked, onChange }) {
  return (
    <div className="my-5 mr-1.5 flex items-center">
      <input
        type="checkbox"
        id={title}
        name="filter"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-3 w-3 rounded-[3px] text-red-400 focus:text-red-400 focus:ring-0 focus:ring-offset-0"
      />

      <label
        htmlFor={title}
        className="mr-2 w-full  cursor-pointer pl-40 text-[13px] text-slate-800"
      >
        {color && getColorNames(title)}
        {!color && title}
      </label>
    </div>
  );
};

export default Checkbox;
