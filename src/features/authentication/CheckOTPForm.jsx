import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ otp, phoneNumber });
      toast.success(message);

      if (user.isActive) {
        if (user.role === "OWNER") {
          navigate("/owner");
        } else if (user.role === "FREELANCER") {
          navigate("/fre");
        }
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [time, setTime] = useState(RESEND_TIME);
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>

      {otpResponse && (
        <div className="flex items-center gap-x-2">
          <span>{otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-secondary-500" />
          </button>
        </div>
      )}

      <div className="mb-4 text-secondary-900 ">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>

      <form className="space-y-10" onSubmit={checkOTPHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
