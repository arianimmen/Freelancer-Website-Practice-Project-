import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./UseEditProjects";
function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  let editValues = {};
  const {
    description,
    title,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  if (isEditSession) {
    editValues = {
      description,
      title,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || new Date());
  const { createProject, isCreating } = useCreateProject();
  const { editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { newProject, id: editId },
        {
          onSuccess: () => {
            onClose();
            reset;
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset;
        },
      });
    }
  };

  const { categories } = useCategories();

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
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />

      <div>
        <label className="mb-2 block text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>

      <DatePickerField label="ددلاین" date={date} setDate={setDate} />

      <div className="mt-8">
        {isCreating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
