import Link from "next/link";
import React from "react";
import { FcIdea } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";

const RealizarTest = () => {
  return (
    <div className="flex flex-col w-9/12 mx-auto gap-10 pt-6">
      <h2 className="text-center text-xl text-blue-700 font-bold bg-gray-200 w-full py-1">
        Test Perfil del Inversor
      </h2>
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-xl">¿De qué se trata?</h3>
        <p className="text-5xl">
          <FcIdea />
        </p>
        <p className="text-center text-sm w-10/12 ">
          {" "}
          El test de Perfil de inversor permitirá que Ud. como inversor, así
          también como sus asesores, conozcan su nvel de aversión al riesgo.
          Esto determinará el tipo de instrumento de inversión que se adaptan a
          su perfil, y la ponderanción de cada uno de ellos en su portafolio
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="font-bold text-xl">Metodología</h3>
        <p className="text-5xl">
          <FcQuestions />
        </p>
        <ol className="list-decimal text-sm w-10/12">
          <li>
            Responda el cuestionario selecionando sólo una alternativa por
            pregunta.
          </li>
          <li>
            Una vez concluído el test, le indicaremos cuál es su perfil de
            inversor.
          </li>
          <li>
            Al finalizar podrá ver las recomendaciones de Portafolio que se
            adaptan a su perfil
          </li>
        </ol>
      </div>
      <div>
        <div className="flex justify-end items-center my-6 ">
          <Link href="/testPerfilDeInversor">
            <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RealizarTest;
