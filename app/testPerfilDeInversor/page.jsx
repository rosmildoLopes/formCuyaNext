"use client";
import React, { useState, useEffect } from "react";
import preguntas from "../constants/preguntas";
import { BsPersonRaisedHand } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const TestPerfilInversor = () => {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(60);
  const [areDisabled, setAreDisabled] = useState(false);
  const [respuestas, setRespuestas] = useState([]);
  const [resultadosMostrados, setResultadosMostrados] = useState(false);

  const reiniciarTest = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Crear una copia aleatoria del array de preguntas
    const preguntasAleatorias = [...preguntas].sort(() => Math.random() - 0.5);
    setPreguntasAleatorias(preguntasAleatorias);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  const handleAnswerSubmit = (opcionSeleccionada) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[preguntaActual] = opcionSeleccionada;
    setRespuestas(nuevasRespuestas);

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        // Si es la última pregunta, termina el quiz
        setAreDisabled(true);
        setResultadosMostrados(true);
      } else {
        // Si no es la última pregunta, pasa a la siguiente
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(60);
      }
    }, 1500);
  };

  const getPreguntaActual = () => {
    if (preguntasAleatorias.length > 0) {
      return preguntasAleatorias[preguntaActual];
    } else {
      return { titulo: "Error: No hay preguntas disponibles", opciones: [] };
    }
  };

  // Función para determinar el perfil predominante entre las respuestas
  const determinarPerfilPredominante = () => {
    const perfilesContados = respuestas.reduce((acc, respuesta) => {
      acc[respuesta.perfil] = (acc[respuesta.perfil] || 0) + 1;
      return acc;
    }, {});

    const perfilPredominante = Object.keys(perfilesContados).reduce((a, b) =>
      perfilesContados[a] > perfilesContados[b] ? a : b
    );
    return perfilPredominante;
  };

  // Mostrar variantes de productos de acuerdo al perfil del usuario
  const mostrarProductos = () => {
    switch (determinarPerfilPredominante()) {
      case "principiante":
        return (
          <ul className="text-black list-disc text-lg">
            <li>Fondos comunes de inversión</li>
            <li>Acciones de empresas consolidadas</li>
            <li>Bonos soberanos</li>
          </ul>
        );
      case "moderado":
        return (
          <ul className="text-black list-disc text-lg">
            <li>Fondos de inversión mixtos</li>
            <li>ETFs diversificados</li>
            <li>Bonos corporativos</li>
          </ul>
        );
      case "avanzado":
        return (
          <ul className="text-black list-disc text-lg">
            <li>Opciones y futuros</li>
            <li>Contratos por diferencia (CFDs)</li>
            <li>Derivados financieros</li>
          </ul>
        );
      case "experto":
        return (
          <ul className="text-black list-disc text-lg ">
            <li>Operaciones apalancadas</li>
            <li>Estrategias de arbitraje</li>
            <li>Instrumentos financieros complejos</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8 px-3 lg:p-4 text-black font-bold">
      <p className="text-2xl text-center text-blue-900 font-bold py-1 bg-gray-200 w-full lg:w-8/12 mx-auto rounded-lg mb-3">
        Perfil del Inversor
      </p>
      {!resultadosMostrados ? (
        <div className="flex flex-col justify-center items-center shadow-xl shadow-slate-800  rounded-2xl w-full lg:w-8/12 mx-auto gap-5 py-4">
          <div className="numero-pregunta">
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </div>
          <div className="titulo-pregunt text-blue-900 font-bold bg-gray-300 shadow-lg shadow-slate-500  py-5 text-left rounded-lg w-11/12 lg:w-8/12 mx-auto cursor-pointer transition duration-300 px-3">
            {getPreguntaActual().titulo}
          </div>
          <ul className="flex flex-col py-5 gap-3 w-11/12 lg:w-8/12 mx-auto">
            {getPreguntaActual().opciones.map((opcion, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerSubmit(opcion)}
                  disabled={areDisabled}
                  className="bg-gray-200 shadow-md  shadow-slate-700 hover:scale-105 font-medium py-3 text-left rounded-lg w-full cursor-pointer transition duration-300 px-3"
                >
                  {opcion.textoRespuesta}
                </button>
              </li>
            ))}
          </ul>
          <div className="tiempo-restante">
            Tiempo restante: {tiempoRestante}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 rounded-2xl shadow-md shadow-slate-800 w-8/12 mx-auto p-6">
          <div className="flex justify-center items-center">
            <p className="text-3xl text-center text-blue-700">
              <BsPersonRaisedHand />
            </p>
          </div>
          <h3 className="w-10/12 text-blue-900 mx-auto text-center text-2xl font-bold">
            Perfil del inversor:
          </h3>

          <p className="text-xl text-center text-blue-700 uppercase font-black tracking-widest">
            {determinarPerfilPredominante()}.
          </p>
          <div className="flex flex-col md:flex-row bg-gray-200 p-3 rounded-2xl">
            <div className="w-5/12">
              <Image
                src="/usuario.png"
                width={400}
                height={400}
                alt="usuario"
                className="w-44"
              />
            </div>
            <div className="w-7/12 flex flex-col gap-2 justify-center items-center">
              <h4 className="font-bold text-xl text-black text-left">
                Productos que puede operar:
              </h4>
              {mostrarProductos()}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <div className="flex justify-end items-center">
              <button
                onClick={reiniciarTest}
                className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl"
              >
                Volver a realizar el test
              </button>
            </div>
            <div className="flex justify-end items-center">
              <Link href="/solicitudCompleta">
                <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl">
                  Sí, estoy de acuerdo
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPerfilInversor;
