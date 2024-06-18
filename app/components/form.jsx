"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSweetAlertDni = () => {
    Swal.fire({
      title: "N° de trámite de su DNI",
      text: "Según su DNI, el dato se encuentra al frente o dorso del mismo..",
      imageUrl: "/dni.png",
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: "Custom image",
    });
  };

  const handleSweetAlertTerminosRenaper = () => {
    Swal.fire({
      html: `
      <p style="color: blue;"><strong>CONSENTIMIENTO INFORMADO</strong></p>
      <br>
      <p>El presente consentimiento para el tratamiento de mis datos personales
      alcanza a los incluidos en mi Documento Nacional de Identidad 
      (INCLUYENDO DATOS BIOMÉTRICOS DE HUELLA DACTILAR Y DE RECONOCIMIENTO FACIAL)
      en confronte con lo que informa el web service del REGISTRO NACIONAL DE LAS PERSONAS.</p>
      <br>
        <br>
      <p style="color: blue;"><strong>DATOS AUTORIZADOS</strong></p>
      <div>
        <br>
        <p>Por medio del presente, en mi carácter de TITULAR DE LOS DATOS presto mi CONSENTIMIENTO para que “IEB” en su carácter de CESIONARIO confronte mis datos personales que se indican en párrafo siguiente con la base de datos del RENAPER, conforme a las especificaciones que a continuación se detallan:
        </p>
        <br>
        <br>
        <p style="color: blue;"><strong>INFORMACIÓN SOBRE EL TRATAMIENTO</strong></p>
        <ul style="text-align:left; padding:20px;">
        <li style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
          <span style="vertical-align: middle; flex-grow: 1;">Los datos serán tratados con la exclusiva finalidad de validar mi identidad y verificar la vigencia de mi Documento Nacional de Identidad para realizar la apertura de cuenta comitente.</span>
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
          <span style="vertical-align: middle; flex-grow: 1;">Los datos confrontados serán destruidos una vez verificada la validez del Documento Nacional de Identidad y validada la misma, no pudiendo ser almacenados.</span>
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
          <span style="vertical-align: middle; flex-grow: 1;">Los datos son facilitados con carácter obligatorio, por cuanto es imprescindible identificar fehacientemente al titular, para asegurar el correcto proceso de identificación.</span>
        </li>
        <li style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 10px; flex-shrink: 0;"></div>
          <span style="vertical-align: middle; flex-grow: 1;">El titular de los datos podrá ejercer los derechos de acceso, rectificación y supresión de sus datos en cualquier momento y a su sola solicitud ante el RENAPER.</span>
        </li>
        <li style="display: flex; align-items: center;">
          <div style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; margin-right: 20px; flex-shrink: 0;"></div>
          <span style="vertical-align: middle; flex-grow: 1;">En cumplimiento de la Resolución AAIP Nº 14/2018, le hacemos saber que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.</span>
        </li>
      </ul>
      `,
      showCloseButton: true,
      focusConfirm: false,
      customClass: {
        container: "my-swal-container",
        popup: "my-swal-popup",
      },
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Entendido!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  };

  return (
    <div className=" lg:w-6/12 mx-auto flex flex-col gap-2">
      <div className="flex justify-center items-center">
        <Image
          priority
          alt="logo Inversiones cuyanas"
          src="/logo-cuyanas.jpeg"
          width={400}
          height={400}
        />
      </div>
      <h2 className="bg-blue-700 py-3 text-2xl text-center font-bold text-white w-11/12 mx-auto shadow-lg shadow-gray-800 mb-2">
        Iniciar Alta de Cuenta de Persona Humana
      </h2>
      {errors.consentimiento?.type === "required" && (
        <p className="text-red-600 bg-red-200">
          Debe aceptar los Términos y Condiciones de Renaper
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-11/12 mx-auto "
      >
        <div className="flex flex-col">
          <label className="text-gray-400 text-left mb-4 pl-3">
            N° Documento*
          </label>
          <input
            className=" border-b outline-none px-6 appearance-none"
            type="number"
            {...register("dni", {
              required: true,
            })}
          />
          {errors.dni?.type === "required" && (
            <p className="text-red-600">El campo es obligatorio</p>
          )}
        </div>
        <div className="flex flex-col relative">
          <label className="text-gray-400 text-left mb-4 pl-3">
            N° de trámite del DNI*
          </label>
          <div className="flex flex-row justify-between items-center gap-2">
            <input
              className=" border-b outline-none px-4 w-11/12 appearance-none"
              type="number"
              {...register("tramiteDni", {
                required: true,
              })}
            />
            <button
              className="h-12 w-12 rounded-full"
              onClick={handleSweetAlertDni}
            >
              <p className="text-blue-700 text-4xl hover:scale-125  transition duration-300">
                <FaInfoCircle />
              </p>
            </button>
          </div>

          {errors.tramiteDni?.type === "required" && (
            <p className="text-red-600">El campo es obligatorio</p>
          )}
        </div>
        <div className="flex flex-col ">
          <InputLabel id="demo-simple-select-standard-label">Genero</InputLabel>
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
          <div className="w-1/12"></div>

          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertTerminosRenaper}
          >
            <p className="text-blue-700 text-2xl hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
        <Link href="/datosPersonales" className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-700 mt-2 text-white font-bold py-4 w-full mx-auto rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-gray-800 transition duration-300"
          >
            Comenzar Trámite
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
