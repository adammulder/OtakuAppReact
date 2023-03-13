import cover from '../assets/images/aboutcover.jpg'
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation()

  return (
    <div>
       <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
            h-[100vh] w-full fixed -z-10'>
        <img src={cover} className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
      </div>
      <h1  className='p-10 text-6xl font-bold'>{t('about')}</h1>
      <p className='pl-10 text-3xl'>{t('des1')} </p>
      <p className='pl-10 text-3xl'>{t('des2')} </p>
      <p className='pl-10 text-3xl'>{t('des3')} </p>
      <p className='pl-10 pt-10 text-2xl'>{t('thanks')}</p>
      <a href="https://wallpaperaccess.com/anime" className='pl-10 text-2xl text-[#cdb4db]'>Wallpaperaccess</a>
      <a href="https://waifu.pics/" className='pl-10 text-2xl text-[#cdb4db]'>Waifupics Api</a>
      <a href="https://jikan.moe/" className='pl-10 text-2xl text-[#cdb4db]'>Jikan Api</a>
      <a href="https://catboys.com/api" className='pl-10 text-2xl text-[#cdb4db]'>Catboys Api</a>
      <a href="https://animechan.vercel.app/" className='pl-10 text-2xl text-[#cdb4db]'>Animechan</a>
      <p className='pl-10 pt-10 text-md'>{t('dis')}</p>
      
    </div>
  )
}

export default About