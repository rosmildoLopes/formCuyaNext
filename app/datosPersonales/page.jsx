"use client";
import React from "react";
import { useForm } from "react-hook-form";
import DatosPersonalesInput from "../components/DatosPersonalesInput";
import DatosAdicionalesIput from "../components/DatosAdicionalesIput";
import Link from "next/link";

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
      <div className="flex justify-end items-center my-6">
        <Link href="/documentacionRequerida">
          <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DatosPersonales;
