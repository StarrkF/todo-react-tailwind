function BasicInput({ modelValue, label, className, onUpdate, ...restProps }) {
  return (
    <input
      className={className + " w-full py-3 px-4 border-2 shadow-black border-slate-600 outline-none rounded-2xl shadow-md focus:shadow-lg focus:shadow-black dark:bg-slate-800 duration-300"}
      type="text"
      placeholder={label}
      value={modelValue}
      onChange={(event) => onUpdate(event.target.value)}
      {...restProps}
    />
  );
}

export default BasicInput;