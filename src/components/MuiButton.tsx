import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from 'react'

export const MuiButton = () => {

  const [formats, setFormats] = useState<string[]>([])
  console.log({formats,})
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updateFormats: string[]) => {
    setFormats(updateFormats)
  }

  return (
  <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
      <Button variant='text' href='https://google.com'>Ir a Google</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>

    <Stack direction='row'>
      <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
        <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  </Stack>
  )
}

