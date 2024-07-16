import React from "react";
import RegisterForm from "../Register";

function RegisterView() {
  return (
    <div className="flex justify-center space-x-8 p-8">
      <div className=" w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-[#36174d] mb-4">Đăng ký</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
export default RegisterView;
