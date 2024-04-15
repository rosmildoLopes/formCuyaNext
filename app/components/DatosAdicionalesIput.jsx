"use client";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaInfoCircle } from "react-icons/fa";

const DatosAdicionalesIput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSweetAlertInversor = () => {
    Swal.fire({
      title: "Información sobre Inversores Calificados",
    });
  };

  const handleSweetAlertSujeto = () => {
    Swal.fire({
      title: "Listado de Sujetos Obligados",
    });
  };

  const handleSweetAlertFATCA = () => {
    Swal.fire({
      title: "Información sobre FATCA",
    });
  };

  const handleSweetAlertPEP = () => {
    Swal.fire({
      title: "RES. UIF 134/2018",
    });
  };

  const handleSweetAlertResidencia = () => {
    Swal.fire({
      title: "Información sobre Residencia fiscal",
    });
  };

  const handleSweetAlertAAGI = () => {
    Swal.fire({
      title: "Información sobre AAGI's",
    });
  };

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&::before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&::after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  return (
    <div className="flex flex-col gap-8 my-8">
      {/* Primera Linea */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-full bg-gray-200 text-center mt-20 py-1">
          Datos Adicionales
        </h3>
      </div>
      <div className="flex gap-8 ">
        <div className="w-1/3">
          <TextField
            id="ingresosAnualesEn$"
            label="Ingresos anuales en $"
            variant="standard"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="procedenciaDeLosFondos">
                Procedencia de los fondos
              </InputLabel>
              <Select
                labelId="procedenciaDeLosFondos"
                id="select-1"
                label="procedenciaDeLosFondos"
                variant="standard"
              >
                <MenuItem value={"ahorrosDeMiActividad"}>
                  Ahorros de mi Actividad
                </MenuItem>
                <MenuItem value={"ventaDeBienesRegistrables"}>
                  Venta de Bienes Registrables
                </MenuItem>
                <MenuItem value={"otros"}>Otros</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="montoAnualAInvertirEn$">
                Monto anual a invertir en $
              </InputLabel>
              <Select
                labelId="montoAnualAInvertirEn$"
                id="select-2"
                label="montoAnualAInvertirEn$"
                variant="standard"
              >
                <MenuItem value={"Menos de 1,000,000.00"}>
                  Menos de 1,000,000.00
                </MenuItem>
                <MenuItem value={"Entre 1,000,000 y 3,000,000.00"}>
                  Entre 1,000,000 y 3,000,000.00
                </MenuItem>
                <MenuItem value={"Entre 3,000,000.00 y 5,000,000.00"}>
                  Entre 3,000,000.00 y 5,000,000.00
                </MenuItem>
                <MenuItem value={"Entre 5,000,000.00 y 18,000,000.00"}>
                  Entre 5,000,000.00 y 18,000,000.00
                </MenuItem>
                <MenuItem value={"Mas de 18,000,000.00"}>
                  Mas de 18,000,000.00
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      {/* Segunda Linea */}
      <div className="flex gap-8">
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="Actividad">Actividad</InputLabel>
              <Select
                labelId="Actividad"
                id="select-3"
                label="Age"
                variant="standard"
              >
                <MenuItem value={"Act. Profesionales, Cientificas y Tecnicas"}>
                  Act. Profesionales, Cientificas y Tecnicas
                </MenuItem>
                <MenuItem value={"Actividades de construccion"}>
                  Actividades de construccion
                </MenuItem>
                <MenuItem value={"Actividades profecionales liberales"}>
                  Actividades profecionales liberales
                </MenuItem>
                <MenuItem value={"Alquiles de Bienes Muebles"}>
                  Alquiles de Bienes Muebles
                </MenuItem>
                <MenuItem value={"Alquiles de maquinaria y equipo"}>
                  Alquiles de maquinaria y equipo
                </MenuItem>
                <MenuItem
                  value={"Alquiles de vehiculos y equipos de transporte"}
                >
                  Alquiles de vehiculos y equipos de transporte
                </MenuItem>
                <MenuItem value={"Ama de casa"}>Ama de casa</MenuItem>
                <MenuItem value={"Captacion, depuracion y distrib. de agua"}>
                  Captacion, depuracion y distrib. de agua
                </MenuItem>
                <MenuItem value={"Elab. Productos Alimenticios y Bebidas"}>
                  Elab. Productos Alimenticios y Bebidas
                </MenuItem>
                <MenuItem value={"Elaboracion de productos de tabaco"}>
                  Elaboracion de productos de tabaco
                </MenuItem>
                <MenuItem value={"Empleado en rel. de depend. ent. privado"}>
                  Empleado en rel. de depend. ent. privado
                </MenuItem>
                <MenuItem value={"Empleado Publico"}>Empleado Publico</MenuItem>
                <MenuItem value={"Estudiante"}>Estudiante</MenuItem>
                <MenuItem value={"Explotacion de minas y canteras"}>
                  Explotacion de minas y canteras
                </MenuItem>
                <MenuItem value={"Explotacion de minas y canteras"}>
                  Explotacion de minas y canteras
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="w-1/3">
          <TextField
            id="profecion/cargo/ocupacion"
            label="Profesión/Cargo/Ocupación"
            variant="standard"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="fondosDeLaCuentaComitente">
                ¿Cómo ingresará los fondos a la cuenta comitente?
              </InputLabel>
              <Select
                labelId="fondosDeLaCuentaComitente"
                id="demo-simple-select-3"
                label="Age"
                variant="standard"
              >
                <MenuItem value={"Transferencia de Títulos"}>
                  Transferencia de Títulos
                </MenuItem>
                <MenuItem value={"Transferencia Bancaria de $"}>
                  Transferencia Bancaria de $
                </MenuItem>
                <MenuItem value={"Transferencia Bancaria en U$D"}>
                  Transferencia Bancaria en U$D
                </MenuItem>
                <MenuItem value={"Cheques Propios"}>Cheques Propios</MenuItem>
                <MenuItem value={"Cheques de Terceros"}>
                  Cheques de Terceros
                </MenuItem>
                <MenuItem value={"Otros"}>Otros</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      {/* Tercera Linea */}
      <div className="flex gap-8">
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Sos Inversor Calificado?"
            labelPlacement="start"
            className="w-full justify-between text-xs"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertInversor}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Sos Sujeto
             Obligado?"
            labelPlacement="start"
            className="w-full justify-between"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertSujeto}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Sos FATCA?"
            labelPlacement="start"
            className="w-full justify-between"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertFATCA}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
      </div>
      {/* Cuarta Linea */}
      <div className="flex gap-8">
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Sos PEP?"
            labelPlacement="start"
            className="w-full justify-between"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertPEP}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="Residencia fiscal en el exterior?"
            labelPlacement="start"
            className="w-full justify-between"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertResidencia}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Sos cliente de un AAGI?"
            labelPlacement="start"
            className="w-full justify-between"
          />
          <button
            className="h-12 w-12 rounded-full"
            onClick={handleSweetAlertAAGI}
          >
            <p className="text-blue-700 hover:scale-125  transition duration-300">
              <FaInfoCircle />
            </p>
          </button>
        </div>
      </div>
      {/* Tercera Linea */}
      <div className="pt-10 flex gap-8">
        <div className="w-1/3 flex gap-8">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Queres Administración de Cartera?"
            labelPlacement="start"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-full bg-gray-200 text-center mt-10 py-1">
          Ultimos Pasos
        </h3>
      </div>
      {/* Primera Linea de Ultimos Pasos */}
      <div className="pt-10 flex gap-8">
        <div className="w-1/3  mr-24">
          <FormControlLabel
            control={<Android12Switch />}
            label="¿Llegó a nosotros recomendado por alguien?"
            labelPlacement="start"
          />
        </div>
        <div className="w-1/3">
          <TextField
            id="emailDeContacto"
            label="Email de contacto"
            variant="standard"
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <TextField
            id="nombreCompleto"
            label="Nombre Completo"
            variant="standard"
            className="w-full"
          />
        </div>
      </div>
      <div className="pt-10 flex gap-20">
        <FormControlLabel
          control={<Android12Switch />}
          label=""
          labelPlacement="start"
        />
        <div className="text-xs">
          Manifiesto en carácter de Declaración Jurada que los fondos utilizados
          en las operaciones realizadas con vuestra empresa son y serán
          obtenidos en forma legal y genuina. Manifiesto en caracter de
          Declaración Jurada que los datos procedentes son correctos, completos
          y fiel expresión de la verdad
        </div>
      </div>
    </div>
  );
};

export default DatosAdicionalesIput;
