import { useState } from "react";

type Input = Record<string, any>;
const useForm = (defaultValue: Input) => {
  const [input, setInput] = useState<Input>(defaultValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput((prev: Input) => ({ ...prev, [key]: value }));
  };

  return { input, handleInputChange };
};

export default useForm;
