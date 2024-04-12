"use client";
import React from "react";
import { useForm } from "react-hook-form";

const DatosPersonalesInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2>Apertura de cuenta para Persona Humana</h2>
        <p>Los campos que contengan * son obligatorios</p>
      </div>

      <div className="flex flex-col justify-center items-center h-auto">
        <h3 className="w-full bg-gray-200 text-center mb-6">
          Datos Personales
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-11/12 mx-auto "
        >
          {/* Primera Linea */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Nombre
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Apellido
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Fecha de nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("birth", {
                  required: true,
                })}
              />
              {errors.birth?.type === "required" && (
                <p className="text-red-600">El campo es obligatorio</p>
              )}
            </div>
          </div>
          {/* Segunda Linea */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-10 mb-4">
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Tipo de Documento
              </label>
              <select
                className="outline-none"
                {...register("tipoDocumento", {
                  required: true,
                })}
              >
                <option value="">DNI</option>
                <option value="lc">L.C.</option>
                <option value="le">L.E.</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4">
                N° Documento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
              />
            </div>

            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Cuil/Cuit/CDI
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("cuit/cuil/cdi", {
                  required: true,
                })}
              />
            </div>
          </div>
          {/* Tercera Linea */}
          <div className="flex flex-col md:flex-row gap-10 mb-4">
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Genero
              </label>
              <select
                className="outline-none"
                {...register("genero", {
                  required: true,
                })}
              >
                <option value="">Masculino</option>
                <option value="lc">L.C.</option>
                <option value="le">L.E.</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Estado Civil
              </label>
              <select
                className="outline-none"
                {...register("tipoDocumento", {
                  required: true,
                })}
              >
                <option value="">DNI</option>
                <option value="lc">L.C.</option>
                <option value="le">L.E.</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-left w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Nacionalidad
              </label>
              <select
                className="outline-none"
                {...register("tipoDocumento", {
                  required: true,
                })}
              >
                <option value="">DNI</option>
                <option value="lc">L.C.</option>
                <option value="le">L.E.</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="otro">Otro</option>
              </select>
            </div>

          </div>
          {/* Quarta Linea */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Nombre
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Apellido
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Fecha de nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("birth", {
                  required: true,
                })}
              />
              {errors.birth?.type === "required" && (
                <p className="text-red-600">El campo es obligatorio</p>
              )}
            </div>
          </div>
          {/* Quinta Linea */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Nombre
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Apellido
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Fecha de nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("birth", {
                  required: true,
                })}
              />
              {errors.birth?.type === "required" && (
                <p className="text-red-600">El campo es obligatorio</p>
              )}
            </div>
          </div>
          {/* Sexta Linea */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Nombre
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Apellido
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left">
              <label className="text-gray-400 text-left mb-4 pl-3">
                Fecha de nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("birth", {
                  required: true,
                })}
              />
              {errors.birth?.type === "required" && (
                <p className="text-red-600">El campo es obligatorio</p>
              )}
            </div>
          </div>

          <div className="flex flex-col ">
            <label className="text-gray-400 text-left mb-4 pl-3">Género</label>
            <select
              className="outline-none"
              {...register("genero", {
                required: true,
              })}
            >
              <option value="">Seleccionar</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="no_binario">No binario</option>
            </select>
            {errors.genero?.type === "required" && (
              <p className="text-red-600">Este campo es obligatorio</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="w-11/12 flex gap-3 justify-center items-center">
              <input
                type="checkbox"
                {...register("consentimiento", {
                  required: true,
                })}
              />

              <p className="font-semibold">
                Consentimiento informado ante Renaper
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700  shadow-lg shadow-gray-800 mt-2 text-white font-bold py-4 w-7/12 mx-auto rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-gray-800 transition duration-300"
          >
            Comenzar Trámite
          </button>
        </form>
      </div>
    </div>
  );
};

export default DatosPersonalesInput;
