import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginView } from "./login-view";

const initialState = { email: "", password: "" };

export function Login() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const onSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      formData.email === "email@email.com" &&
      formData.password === "123456"
    ) {
      navigate("/dashboard");
    }
  };
  const registerClick = () => {
    navigate("/register");
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <LoginView
      onSubmitLogin={onSubmitLogin}
      registerClick={registerClick}
      formData={formData}
      onChange={onChange}
    />
  );
}
