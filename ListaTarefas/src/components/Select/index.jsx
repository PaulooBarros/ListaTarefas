import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({ options }) {
  const [area, setArea] = useState('');

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-area-label">Área de Gastos</InputLabel>
      <Select
        labelId="select-area-label"
        id="select-area"
        value={area}
        onChange={handleChange}
        autoWidth
        label="Área de Gastos"
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.title}>
            {option.title}
          </MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}
