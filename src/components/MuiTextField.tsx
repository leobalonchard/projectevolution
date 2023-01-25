import { Stack, TextField } from '@mui/material'

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='name' variant='outlined'/>
        <TextField label='name' variant='filled'/>
        <TextField label='name' variant='standard'/>
      </Stack>
    </Stack>
  )
}
