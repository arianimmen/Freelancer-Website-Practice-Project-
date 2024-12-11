import RadioInput from "./RadioInput";

function RadioGroup({ register, errors, configs, validationSchema = {} }) {
  const { name, options } = configs;
  return (
    <div className="flex items-center justify-center gap-x-8">
      <div className="flex flex-wrap justify-center items-center gap-x-2 text-secondary-600">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            name={name}
            value={option.value}
            id={option.value}
            label={option.label}
            register={register}
            required
            validationSchema={validationSchema}
          />
        ))}

        {errors && errors["role"] && (
          <span className="block text-error text-sm mt-2 w-full text-center">
            {errors["role"]?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default RadioGroup;
