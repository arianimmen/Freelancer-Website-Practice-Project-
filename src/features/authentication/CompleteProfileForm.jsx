import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";
import RadioGroup from "../../ui/RadioGroup";

function CompleteProfileForm() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmitLogic = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div className="w-full sm:max-w-sm">
          <div className="text-center font-bold text-2xl mb-8 text-secondary-900">
            تکمیل اطلاعات
          </div>
          <form
            className="space-y-8"
            onSubmit={handleSubmit(handleSubmitLogic)}
          >
            <TextField
              dir="rtl"
              label={"نام و نام خانوادگی "}
              name={"name"}
              register={register}
              required
              validationSchema={{
                required: "نام الزامی است",
              }}
              errors={errors}
            />
            <TextField
              label={"ایمیل"}
              name={"email"}
              register={register}
              required
              validationSchema={{
                required: "ایمیل الزامی است",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "ایمیل نامعتبر است",
                },
              }}
              errors={errors}
            />
            <RadioGroup
              register={register}
              errors={errors}
              validationSchema={{
                required: "انتخاب نقش ضروری است",
              }}
              configs={{
                name: "role",
                options: [
                  { value: "OWNER", label: "کارفرما" },
                  { value: "FREELANCER", label: "فریلنسر" },
                ],
              }}
            />
            <div>
              {isPending ? (
                <Loading />
              ) : (
                <button type="submit" className="btn btn--primary w-full">
                  تایید
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
