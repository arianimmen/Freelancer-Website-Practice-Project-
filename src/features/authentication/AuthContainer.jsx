import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(1);

  const {
    required,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            required={required}
            register={register}
            errors={errors}
          />
        );

      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
