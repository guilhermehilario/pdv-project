import { ChangeEvent, FormEvent } from "react";

export type RegisterViewProps = {
  onCancel: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmitRegister: (event: FormEvent<HTMLFormElement>) => void;
  formData: {
    name: string;
    email: string;
    cpfcnpj: string;
    phone: string;
    password: string;
  };
};
