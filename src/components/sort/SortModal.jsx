import { sortOptions } from "../../data";
import RadioButton from "../UI/RadioButton";

function SortModal() {
  return (
    <section>
      <span className="mb-5 block font-semibold text-[#ff755d] lg:text-lg">
        مرتب‌سازی
      </span>
      {sortOptions.map((item) => {
        const { id, title } = item;

        return <RadioButton key={id} title={title} />;
      })}
    </section>
  );
}

export default SortModal;
