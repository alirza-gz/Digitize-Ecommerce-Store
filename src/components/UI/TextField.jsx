const TextField = ({
  label,
  name,
  register,
  placeholder,
  type = "text",
  required,
  validationSchema = {},
  errors,
  autoFocus,
}) => {
  return (
    <div>
      <label htmlFor={name} className="flex mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={name}
        autoComplete="off"
        placeholder={placeholder}
        className="textField-input"
        autoFocus={autoFocus}
      />
      {errors && errors[name] && (
        <span className="block text-right text-rose-500 mt-3 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
