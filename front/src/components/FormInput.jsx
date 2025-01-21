const FormInput = ({ placeholder, name, type, defaultValue, children }) => {
  return (
    <div className="form-control">
      <label className="input input-bordered flex items-center gap-2">
        {children}
        <input
          type={type}
          className="grow"
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
};

export default FormInput;
