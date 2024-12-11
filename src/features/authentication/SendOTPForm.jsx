import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useForm } from "react-hook-form";

function SendOTPForm({ onSubmit, isSendingOtp, register, errors }) {
  return (
    <div>
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          required
          register={register}
          validationSchema={{
            required: "شماره موبایل الزامی است",
          }}
          type="number"
          errors={errors}
        />

        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
