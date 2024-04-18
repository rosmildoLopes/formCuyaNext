import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col gap-12 p-12">
      <div className="flex flex-col gap-8 rounded-2xl shadow-md shadow-slate-800 w-full lg:w-8/12 mx-auto p-6 lg:p-16">
      <div className="flex justify-center items-center">
        <p className="text-8xl text-blue-700">
          <FaRegCheckCircle />
        </p>
      </div>
      <h3 className="w-10/12 text-blue-700 mx-auto text-center text-2xl font-bold">
        Solicitud Completa
      </h3>

      <div className="flex flex-col gap-5">
        <div className="bg-gray-200 p-3 rounded-2xl"></div>
        <p className=" text-center">
          Tu Solicitud fue procesada exitosamente. En unos instantes te
          enviaremos 2 emails. En el primer correo recibirás el detalle de los
          datos que acabas de informar y en el segundo encontrarás tu numero de
          cuenta y las credenciales para que puedas comenzar a operar
        </p>
      </div>
      <div className="flex justify-center gap-3">
        <div className="flex justify-center items-center">
          <Link href="/">
            <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl">
              Aceptar
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default page;
