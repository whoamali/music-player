import { Slider } from '@mui/material'
import { styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'rgb(51, 16, 49)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background: 'rgb(51, 16, 49)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background: 'rgb(51, 16, 49)',
    transform: 'rotate(30deg)',
  },
})


export const Widget = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '80vw',

    marginTop: 50,
  },

  padding: 16,
  borderRadius: 16,
  width: '45vw',

  height: 600,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}))


export const CoverImage = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '80vw',
  },
  width: '45vw',
  height: 400,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
}))



export const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
})


export const TimeIndicator = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
  height: 4,
  '& .MuiSlider-thumb': {
    width: 8,
    height: 8,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:before': {
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${
        theme.palette.mode === 'dark'
          ? 'rgb(255 255 255 / 16%)'
          : 'rgb(0 0 0 / 16%)'
      }`,
    },
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.28,
  },
}))



export const VolumeIndicator = styled(Slider)(({ theme }) => ({
  width: 90,
  position: 'absolute',
  right: 30,
  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    '&:before': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: 'none',
    },
  },
}))
