const FormSelect = ({ placeholder, list, name, defaultValue }) => {
  return (
    <div className="form-control">
      <select
        defaultValue={defaultValue}
        name={name}
        id={name}
        className="select select-bordered w-full"
      >
        <option
          selected
          disabled
          defaultValue={placeholder}
          value={placeholder}
        >
          {placeholder}
        </option>
        {list.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
