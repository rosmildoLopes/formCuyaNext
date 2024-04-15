import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const DatosAdicionalesIput = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-1">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-2">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label-2"
                id="demo-simple-select-2"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-3">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label-3"
                id="demo-simple-select-3"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
              <InputLabel id="demo-simple-select-label-1">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="w-1/3">
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <div className="w-1/3">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-3">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label-3"
                id="demo-simple-select-3"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DatosAdicionalesIput;
