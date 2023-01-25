import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react';

export const MuiSelect = () => {

  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box width='250px'>
      <TextField label='Elegi tu pais' select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple: true}}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='AR'>Argentina</MenuItem>
        <MenuItem value='BR'>Brasil</MenuItem>
      </TextField>
    </Box>
  )
}
