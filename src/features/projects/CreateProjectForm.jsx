import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
  };

  const { categories, isLoading } = useCategories();

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
      <TextField
        label={"توضیحات پروژه"}
        name={"description"}
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است‌",
          minLength: {
            value: 10,
            message: "طول موضوع نامناسب است",
          },
        }}
        errors={errors}
      />
      <TextField
        label={"بودجه"}
        name={"budget"}
        register={register}
        required
        type="number"
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        register={register}
        label="دسته بندی"
        name="category"
        options={categories}
        requierd
      />

      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>

      <DatePickerField label="ددلاین" date={date} setDate={setDate} />

      <button className="btn btn--primary w-full" type="submit">
        تایید
      </button>
    </form>
  );
}

export default CreateProjectForm;
