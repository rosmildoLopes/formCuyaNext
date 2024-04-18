import Image from "next/image";
import Link from "next/link";
import React from "react";

const DatosDelTitular = () => {
  return (
    <div className="flex flex-col gap-12 w-9/12 mx-auto py-12">
      <div className="text-blue-600 text-2xl font-bold text-center">
        Apertura de Cuenta para Persona Humana
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-center w-full bg-blue-600 text-white font-medium py-2 rounded-xl">
          Datos del Titular
        </h3>
        <div className="border border-blue-600 flex flex-col gap-14 md:flex-row justify-around items-center rounded-xl py-8">
          <div className="w-24">
            <Image
              src="/usuario.png"
              alt="representacion humana"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:gap-16 ">
              <p className=" text-left font-medium">Nombre:</p>
              <p className="text-left text-sm">Nombre del Usuario</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16">
              <p className="text-left font-medium">CUIT:</p>
              <p className="text-left text-sm">CUIT o CUIL del usuario</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16">
              <p className="text-left font-medium">Mail:</p>
              <p className="text-left text-sm">correoelectronico@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 md:w-full lg:w-3/12">
            <div className="flex justify-center items-center w-full">
              <Link href="/datosPersonales" className="w-full">
                <button className="px-5 py-3 bg-blue-600 text-white font-extrabold rounded-full w-full">
                  Editar
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center w-full">
              <Link href="/realizarTestPerfilDeInversor" className="w-full">
                <button className="px-5 py-3 bg-blue-600 text-white font-extrabold rounded-full w-full">
                  Finalizar Trámite
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosDelTitular;
