import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

function Fun() {
  const [anime, setAnime] = useState()
  const [char, setChar] = useState()
  const [quote, setQuote] = useState()
  const { t, i18n } = useTranslation()

    const getAnime = () => {
    axios.get('https://animechan.vercel.app/api/random')
    .then(response => {
      console.log(response)
      setAnime(response.data.anime)
    }).catch(err => {
      console.log(err)
    });
  };

  const getChar = () => {
    axios.get('https://animechan.vercel.app/api/random')
    .then(response => {
      console.log(response)
      setChar(response.data.character)
    }).catch(err => {
      console.log(err)
    });
  };

  const getQuote = () => {
    axios.get('https://animechan.vercel.app/api/random')
    .then(response => {
      console.log(response)
      setQuote(response.data.quote)
    }).catch(err => {
      console.log(err)
    });
  };

  return (
    <div>
       <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
            h-[100vh] w-full fixed -z-10'>
        <img src='https://scaruki.files.wordpress.com/2021/07/zero-two-wallpaper.jpg?w=1200' className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
        </div>
        <div className='flex p-20 justify-center text-center'>
        <button className='bg-[#cdb4db] p-5 rounded-3xl text-xl hover:bg-[#ffafcc] shadow-2xl border-black border-2' onClick={() =>{getAnime(); getChar(); getQuote()}}>{t('button')}</button>
        </div>
        <div className='flex text-center justify-center'>
          <h1 className='text-4xl'>{anime}</h1>
        </div>
        <div className='flex text-center justify-center p-10'>
          <h1 className='text-3xl'>{char}</h1>
        </div>
        <div className='flex text-center justify-center p-5'>
          <h1 className='text-xl'>{quote}</h1>
        </div>
    </div>
  )
}

export default Fun