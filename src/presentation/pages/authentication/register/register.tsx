import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterView } from "./register-view";

const initialState = {
  name: "",
  email: "",
  cpfcnpj: "",
  phone: "",
  password: "",
};

export function Register() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/login");
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <RegisterView
      formData={formData}
      onCancel={onCancel}
      onChange={onChange}
      onSubmitRegister={onSubmitRegister}
    />
  );
}
