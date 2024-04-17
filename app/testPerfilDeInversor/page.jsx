'use client'
import React from 'react'
import { useState, useEffect } from "react";
import preguntas from "../constants/preguntas.js";


const TestPerfilInversor = () => {
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [showAnswer, setshowAnswer] = useState(false);

  useEffect(() => {
    // Crear una copia aleatoria del array de preguntas
    const preguntasAleatorias = [...preguntas].sort(() => Math.random() - 0.5);
    setPreguntasAleatorias(preguntasAleatorias);
  }, []);

  function getPreguntaActual() {
    if (preguntasAleatorias.length > 0) {
      return preguntasAleatorias[preguntaActual];
    } else {
      return { titulo: "Error: No hay preguntas disponibles", opciones: [] };
    }
  }

  function handleAnswerSubmit(isCorrect, e) {
    // añadir puntuación
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // cambiar a la siguiente pregunta
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(40);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="bg-[#8435de] text-white w-[500px] flex h-80 rounded-3xl">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntuación} de {preguntas.length}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Volver a jugar
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setshowAnswer(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
    );

  if (showAnswer)
    return (
      <main className="bg-[#8435de] text-white h-full w-[500px] flex  flex-col justify-evenly items-center rounded-3xl">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {getPreguntaActual().titulo}
          </div>
          <div>
            {
              getPreguntaActual().opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/";
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Volver a jugar"
              : "Siguiente"}
          </button>
        </div>
      </main>
    );

  return (
    <div className="flex justify-center mt-8 h-full">
      <main className="bg-[#8435de] text-white h-full w-[500px] flex  flex-col justify-evenly items-center rounded-3xl">
        <div className="lado-izquierdo w-full px-6">
          <div className="numero-pregunta text-center mt-8">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta font-bold text-2xl mt-3 mb-5 text-center">
            {getPreguntaActual().titulo}
          </div>
          <div className="opciones flex flex-col py-5 gap-3">
            {getPreguntaActual().opciones.map((respuesta) => (
              <button
                className="bg-[#3c0e70] mt-2 py-3 rounded-lg cursor-pointer transition duration-500 opacity-75 hover:opacity-100"
                disabled={areDisabled}
                key={respuesta.textoRespuesta}
                onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
              >
                {respuesta.textoRespuesta}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-12">
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button
              className="mb-2 mt-3 border-2 rounded-full px-8 py-4"
              onClick={() => {
                setTiempoRestante(10);
                setAreDisabled(false);
                if (preguntaActual === preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default TestPerfilInversor