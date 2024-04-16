import Image from "next/image";
import React from "react";
import { ImUpload3 } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import SubirDni from "../components/subirDni";
import PruebaDeVida from "../components/PruebaDeVida";

const DocumentacionRequerida = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col justify-center">
      <h2 className="text-blue-600 text-2xl font-semibold text-center my-6 tracking-wide">
        Documentación Requerida
      </h2>
      <div className="flex flex-col items-start text-xs italic mb-6">
        <p>*Los formatos de archivo permitidos son: *.jpg;*.jpeg;*.png</p>
        <p>
          * El tamaño de cada archivo no puede superar los 7MB. Se recomienta no
          superar los 50MB en la totalidad de los archivos
        </p>
      </div>
      <p className="text-blue-700 bg-gray-200 font-semibold text-center tracking-wide py-1">
        Frente y Dorso del DNI
      </p>
      <SubirDni />
      <p className="text-blue-700 bg-gray-200 font-semibold text-center tracking-wide my-8 py-1">
        Selfie y Prueba de Vida
      </p>
      <PruebaDeVida />
      <div className="flex justify-end items-center my-6">
        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default DocumentacionRequerida;
