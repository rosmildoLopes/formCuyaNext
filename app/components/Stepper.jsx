import React, { useEffect, useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { TiCalculator } from "react-icons/ti";
import { CiSquareCheck } from "react-icons/ci";

const Stepper = ({ steps, currentStep }) => {
  const iconComponents = [
    <FaUser />,
    <MdOutlinePhotoCamera />,
    <IoMdCloudUpload />,
    <TiCalculator />,
    <MdOutlinePhotoCamera />,
    <CiSquareCheck />,
  ];

  const [newStep, setNewStep] = useState([]);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
    setCurrentIconIndex(currentStep - 1); //Buscar icono en la array
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    const iconIndex =
      index < iconComponents.length ? index : iconComponents.length - 1;
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center py-3"
            : "flex items-center py-3"
        }
      >
        <div className="relative flex flex-col items-center text-blue-900 text-2xl">
          {/* Tamaño de los iconos y color */}
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.selected
                ? "bg-green-600 text-white font-bold border border-green-600" //Color del icono Completado
                : " "
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              iconComponents[iconIndex] //Iconos de la barra de progreso
            )}
          </div>
          <div
            className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-green-600" : "border-gray-300"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-8 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
