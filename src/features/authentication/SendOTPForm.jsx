import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setphoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <TextField
          onChange={(e) => setphoneNumber(e.target.value)}
          label="شماره موبایل"
          value={phoneNumber}
          name="phoneNumber"
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOTPForm;
zxz