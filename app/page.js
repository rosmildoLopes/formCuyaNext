"use client";
import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Form from "./components/form";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import DatosDelTitular from "./datosDelTitular/page";
import DatosPersonales from "./datosPersonales/page";
import TestPerfilInversor from "./testPerfilDeInversor/page";
import DocumentacionRequerida from "./documentacionRequerida/page";
import Complite from "./solicitudCompleta/page";
import { set } from "react-hook-form";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Datos Personales",
    "Foto DNI",
    "Apertura de Cuenta",
    "Test de Inversor",
    "Foto",
    "Finalizar",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <DatosPersonales />;
      case 2:
        return <DocumentacionRequerida />;
      case 3:
        return <DatosDelTitular />;
      case 4:
        return <TestPerfilInversor />;
      case 5:
        return <DocumentacionRequerida />;
      case 6:
        return <Complite />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "Continuar" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="pt-2 w-full">
      <Stepper steps={steps} currentStep={currentStep} />
      <div>
        <StepperContext.Provider value={{}}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      <StepperControl
        handleClick={handleClick}
        steps={steps}
        currentStep={currentStep}
      />
    </div>
  );
}
