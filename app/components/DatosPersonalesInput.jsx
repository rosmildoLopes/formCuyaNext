"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

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
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-2xl font-semibold text-blue-600 pt-5">
          Apertura de cuenta para Persona Humana
        </h2>
        <p className="text-blue-600 text-sm mb-5">
          Los campos que contengan * son obligatorios
        </p>
      </div>

      <div className="flex flex-col justify-center items-center h-auto">
        <h3 className="w-full bg-gray-200 text-blue-600 text-center mb-6 py-1">
          Datos Personales
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-11/12 mx-auto "
        >
          {/* Primera Linea */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4 ">Nombre</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("nombre", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4 ">Apellido</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Fecha de nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="date"
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
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <InputLabel id="demo-simple-select-standard-label">
                Tipo de Documento
              </InputLabel>
              <Select
                variant="standard"
                {...register("tipoDeDocumento", {
                  required: true,
                })}
                label="tipoDeDocumento"
              >
                <MenuItem value="dni">
                  <em>DNI</em>
                </MenuItem>
                <MenuItem value="le">L.E.</MenuItem>
                <MenuItem value="lc">L.C.</MenuItem>
                <MenuItem value="pasaporte">Pasaporte</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">
                N° Documento
              </label>
              <input
                {...register("numeroDeDocumento", {
                  required: true,
                })}
                className=" border-b outline-none px-6 remove-arrow"
                type="number"
              />
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4 ">
                Cuil/Cuit/CDI
              </label>
              <input
                className=" border-b outline-none px-6 remove-arrow"
                type="number"
                {...register("cuit/cuil/cdi", {
                  required: true,
                })}
              />
            </div>
          </div>
          {/* Tercera Linea */}
          <div className="flex flex-col md:flex-row gap-10 mb-4">
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <InputLabel id="demo-simple-select-standard-label">
                Genero
              </InputLabel>
              <Select
                variant="standard"
                {...register("genero", {
                  required: true,
                })}
                label="genero"
              >
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="femenino">Femenino</MenuItem>
                <MenuItem value="No binario">No binario</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
            </div>
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <InputLabel id="demo-simple-select-standard-label">
                Estado Civil
              </InputLabel>
              <Select
                variant="standard"
                {...register("estadoCivil", {
                  required: true,
                })}
              >
                <MenuItem value="soltero">Soltero</MenuItem>
                <MenuItem value="casado">Casado</MenuItem>
                <MenuItem value="viudo">Viudo</MenuItem>
                <MenuItem value="vivorciado">Divorciado</MenuItem>
              </Select>
            </div>
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <InputLabel id="demo-simple-select-standard-label">
                Nacionalidad
              </InputLabel>
              <Select
                variant="standard"
                {...register("nacionalidad", {
                  required: true,
                })}
              >
                <MenuItem value="angentina">Argentina</MenuItem>
                <MenuItem value="brasil">Brasil</MenuItem>
                <MenuItem value="mexico">Mexico</MenuItem>
                <MenuItem value="españa">España</MenuItem>
              </Select>
            </div>
          </div>
          {/* Quarta Linea */}
          <div className="flex flex-col md:flex-row gap-10 mb-5">
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left">Calle*</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("calle", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-row justify-center items-left w-full md:w-1/3 gap-12">
              <div className="flex justify-center items-center w-1/3 ">
                <TextField label="N°" variant="standard" />
              </div>
              <div className="flex justify-center items-center w-1/3 ">
                <TextField label="Piso" variant="standard" />
              </div>
              <div className="flex justify-center items-center w-1/3 ">
                <TextField label="Dto" variant="standard" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <InputLabel id="demo-simple-select-standard-label">
                País de Residencia
              </InputLabel>
              <Select
                variant="standard"
                {...register("pais", {
                  required: true,
                })}
              >
                <MenuItem value="angentina">Argentina</MenuItem>
                <MenuItem value="brasil">Brasil</MenuItem>
                <MenuItem value="mexico">Mexico</MenuItem>
                <MenuItem value="españa">España</MenuItem>
              </Select>
            </div>
          </div>
          {/* Quinta Linea */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Codigo Postal
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">Localidad</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("surname", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">Estado</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
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
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">
                Lugar de Nacimiento
              </label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">Teléfono</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="number"
                {...register("telefono", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col justify-center items-left w-full md:w-1/3">
              <label className="text-gray-400 text-left mb-4">Celular</label>
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
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex flex-col justify-center items-left w-1/2">
              <label className="text-gray-400 text-left mb-4">Email</label>
              <input
                className=" border-b outline-none px-6 appearance-none"
                type="mail"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.genero?.type === "required" && (
                <p className="text-red-600">Este campo es obligatorio</p>
              )}
            </div>
            <div className="flex flex-col justify-center items-left w-1/2">
              <label className="text-gray-400 text-left mb-4 ">
                {" "}
                Validar email
              </label>
              <input
                className=" border-b outline-none px-6 remove-arrow"
                type="mail"
                {...register("validarEmail", {
                  required: true,
                })}
              />
              {errors.genero?.type === "required" && (
                <p className="text-red-600">Este campo es obligatorio</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DatosPersonalesInput;
