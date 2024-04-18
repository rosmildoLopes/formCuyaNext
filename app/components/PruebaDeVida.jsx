"use client";
import React from "react";
import { ImUpload3 } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import Image from "next/image";

const PruebaDeVida = () => {
  const handleSweetAlertDni = () => {
    Swal.fire({
      title: "Agregar ejemplo",
      text: "Agregar ejemplo de como validar el DNI",
    });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-12 justify-center mt-12">
        <div className="flex flex-col border rounded-xl py-10 px-12 gap-6 w-full md:w-1/2">
          <div className="flex justify-center items-center">
            <button className="bg-blue-600 text-white w-full lg:w-2/3 py-2 rounded-lg font-semibold flex items-center justify-center gap-3">
              <p className="flex justify-center items-center text-xl">
                <ImUpload3 />
              </p>
              Selfie
            </button>
          </div>
          <div className="flex justify-center  items-center h-64">
            <Image
              src="/usuario.png"
              alt="frente DNI"
              width={200}
              height={300}
            />
          </div>
          <div className="flex w-full justify-center items-center">
            <p className="lg:ml-5 lg:p-7 p-4 text-left font-semibold">
              {" "}
              Especificaciones para la validación de su DNI
            </p>
            <button
              className="h-12 w-12 rounded-full"
              onClick={handleSweetAlertDni}
            >
              <p className="text-blue-700 text-4xl hover:scale-125 transition duration-300">
                <FaInfoCircle />
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col border rounded-xl py-10 px-12 gap-6 w-full md:w-1/2">
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <button className="bg-blue-600 text-white w-full lg:w-2/3 py-2 px-4 rounded-lg text-xs md:text-base font-semibold flex items-center justify-center gap-3">
              <p className="flex justify-center items-center text-xl">
                <ImUpload3 />
              </p>
              Selfie de Prueba de Vida
            </button>
          </div>
          <div className="flex justify-center items-center h-64">
            <Image
              src="/selfie_5d.png"
              alt="dorso DNI"
              width={300}
              height={300}
            />
          </div>
          <div className="flex w-full">
            <p className="lg:ml-5 lg:p-7 p-4 text-left font-semibold">
              {" "}
              Mano con cinco(5) dedos levantados a la misma altura del rostro.
              Se debe ver mano completa en la fotografia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PruebaDeVida;
