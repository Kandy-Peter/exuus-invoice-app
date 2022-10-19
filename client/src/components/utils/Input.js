import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({ inputName, readOnly, type, total, bgColor }) => {
  const { register, formState: errors } = useFormContext();
  return (
    <input
      {...(readOnly && { disabled: true, readOnly, value: total })}
      type={type}
      name={inputName}
      id={inputName}
      {...register(inputName, { required: true })}
      className={`input bg-${bgColor ? bgColor : "primaryOne"} ${
        errors.errors[inputName]?.type === "required"
          ? "border-red"
          : "border-primary"
      }`}
    />
  );
};

export default Input;
