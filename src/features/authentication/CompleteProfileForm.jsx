import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
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
          <form className="space-y-8" onSubmit={handleSubmit}>
            <TextField
              label={"نام و نام خانوادگی "}
              name={"name"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <TextField
              label={"ایمیل"}
              name={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="flex items-center justify-center gap-x-8">
              <div className="flex items-center gap-x-2 text-secondary-600">
                <RadioInput
                  name="role"
                  value="OWNER"
                  id="OWNER"
                  label="کارفرما"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  checked={role === "OWNER"}
                />

                <RadioInput
                  name="role"
                  value="FREELANCER"
                  id="FREELANCER"
                  label="فریلنسر"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  checked={role === "FREELANCER"}
                />
              </div>
            </div>
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
