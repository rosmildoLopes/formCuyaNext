import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        onClick={() => handleClick("Continuar")}
        className="bg-blue-400 text-white py-2 px-4"
      >
        {currentStep == steps.length - 1 ? "Confirmar" : "Continuar"}
      </button>
    </div>
  );
};

export default StepperControl;
