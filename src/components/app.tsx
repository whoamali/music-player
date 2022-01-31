import React, { useEffect, useState } from 'react'
import { Box, Stack,List,ListItem } from '@mui/material'
import MetaData from '../services/meta-data'
import getFileList from './../utils/getFileList'
import MusicPlayerSlider from './player'

export default function Application() {
  const [imageSrc, setImageSrc] = useState()
  const [title, setTitle] = useState()
  const [artist, setArtist] = useState()
  const [genre, setGenre] = useState()
  const [audioID, setAudioID] = useState(0)
  const [audioList, setAudioList] = useState([])
  const [audioSrc, setAudioSrc] = useState()

  const audio = React.useRef(null)

  const [metaData, setMetaData] = useState(null)
  const handler = async e => {
    setAudioList(getFileList(e))
    console.log(audioList)
    setMetaData(new MetaData(e.target.files[audioID]))
  }

  useEffect(() => {
    if (!metaData) return
    metaData.getImageSrc().then(setImageSrc)
    metaData.getInfo().then(console.log)
    metaData.getTitle().then(setTitle)
    metaData.getArtist().then(setArtist)
    metaData.getGenre().then(setGenre)
    metaData.getAudioSrc().then(setAudioSrc)
  }, [metaData])

  return (
    <Stack>
      <audio src={audioSrc} ref={audio} autoPlay></audio>
      <Box sx={{ position: 'absolute', zIndex: 2 }}>
        <input type="file" onChange={handler} accept="audio/*" multiple />
      </Box>
      <MusicPlayerSlider
        genre={genre}
        title={title}
        artist={artist}
        poster={imageSrc}
        audio={audio}
      />
      
      <List sx={{marginTop:'20px',marginInline:'5px'}}>
        
        {audioList.map(item=><ListItem key={item.id} sx={{color:'wheat',borderTop:'1px solid gray',fontSize:'large'}} button>{item.name}</ListItem>)}
      </List>
    </Stack>
  )
}
