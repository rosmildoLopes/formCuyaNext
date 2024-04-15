"use client";
import React from "react";
import { useForm } from "react-hook-form";
import DatosPersonalesInput from "../components/DatosPersonalesInput";
import DatosAdicionalesIput from "../components/DatosAdicionalesIput";

const DatosPersonales = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-9/12 mx-auto">
      <DatosPersonalesInput />
      <DatosAdicionalesIput />
    </div>
  );
};

export default DatosPersonales;
