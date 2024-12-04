function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        dir="ltr"
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
