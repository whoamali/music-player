import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import DefaultImage from '../../img/default_image.jpg'

import '../app-style.css'

export default function Cover() {
  const audioState = useSelector((state: RootState) => state.audio)

  const theme = useTheme()

  const match = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Stack alignItems="center" sx={{ width: match ? '70%' : '40%' }}>
      <Box>
        {audioState.imageSrc ? (
          <img
            alt="can't win - Chilling Sunday"
            src={audioState.imageSrc}
            className="img"
          />
        ) : (
          <img
            alt="can't win - Chilling Sunday"
            src={DefaultImage}
            className="img"
          />
        )}
      </Box>
      <Box {...(audioState && { mt: 1 })} sx={{ width: '100%' }}>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          {audioState.genre}
        </Typography>
        <Typography>
          <b>{audioState.title}</b>
        </Typography>
        <Typography>{audioState.artist}</Typography>
      </Box>
    </Stack>
  )
}
