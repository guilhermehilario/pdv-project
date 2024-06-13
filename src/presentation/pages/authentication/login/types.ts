import { ChangeEvent, FormEvent } from "react";

export type LoginViewProps = {
  onSubmitLogin: (event: FormEvent<HTMLFormElement>) => void;
  registerClick: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formData: { email: string; password: string };
};
