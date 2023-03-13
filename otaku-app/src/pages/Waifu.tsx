import axios from 'axios'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cover from '../assets/images/waifu.png'
import { useTranslation } from 'react-i18next';

function Waifu() {
  const [image, setImage] = useState()
  const [image2, setImage2] = useState()
  const { t, i18n } = useTranslation()

  const getImg = () => {
    axios.get('https://api.waifu.pics/sfw/waifu')
    .then(response => {
      console.log(response)
      // console.log(response.data.urls.small)
      setImage(response.data.url)
    }).catch(err => {
      console.log(err)
    })
  }

  const getImg2 = () => {
    axios.get('https://api.catboys.com/img')
    .then(response => {
      console.log(response)
      // console.log(response.data.urls.small)
      setImage2(response.data.url)
    }).catch(err => {
      console.log(err)
    })
  }

  
  return (
    <div>
        <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
              h-[100vh] w-full fixed -z-10'>
          <img src={cover} className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
        </div>
        <div className='p-10 grid grid-cols-12 gap-5'>
          <div className='flex-grow col-start-1 col-end-6 pl-40'>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                sx={{ height:650 }}
                image={image}
                title="girl"
                />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {t('find1')}
                      </Typography>
                    </CardContent>
                <CardActions>
                    <button className='border-solid rounded-lg border-5 p-3 bg-[#ffafcc] m-3 hover:bg-[#a2d2ff] hover:text-white' onClick={() =>{getImg();}}>
                        {t('click')}
                    </button>
                </CardActions>
            </Card>
            
          </div>
          <div className='flex-grow grid col-start-6 col-end-12'>
              <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                    sx={{ height:650 }}
                    image={image2}
                    title="boy"
                    />
                     <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {t('find2')}
                      </Typography>
                    </CardContent>
                    <CardActions>
                        <button className='border-solid rounded-lg border-5 p-3 bg-[#ffafcc] m-3 hover:bg-[#a2d2ff] hover:text-white' onClick={() =>{getImg2();}}>
                        {t('click')}
                        </button>
                    </CardActions>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Waifu