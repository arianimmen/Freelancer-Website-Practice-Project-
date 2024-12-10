import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"عنوان پروژه"}
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامناسب است",
          },
        }}
        errors={errors}
      />
      <button className="btn btn--primary w-full" type="submit">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
