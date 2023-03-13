import { useEffect } from 'react'
import homecover from '../assets/images/homecover.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';

function Home() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    const { t, i18n } = useTranslation()

  return (
    <div>
        <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
      h-[85vh] w-full relative -z-10'>
        <img src={homecover} className="w-screen h-[85vh] object-cover absolute mix-blend-overlay"/>
        <div className='p-24'>
          <h1 className='text-black text-6xl font-bold text-center'>{t('welcome')}</h1>
          <h1 className='text-black text-6xl font-bold text-center pt-52'>{t('new')}</h1>
          <h1 className='text-black text-6xl font-bold text-center pt-48'>{t('friends')}</h1>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-20 pt-10 p-5 bg-[#bde0fe]'>
            <div data-aos="fade-right" className='col-span-3  h-40 justify-items-center flex bg-[#ffc8dd] hover:bg-[#ffafcc] rounded-lg shadow-2xl'>
                <img src="https://i.pinimg.com/474x/13/d2/0e/13d20ea2dee5dec738033482a8358bd4.jpg" className='h-[17vh] w-[10vw] p-5' />
                <h1 className='text-black text-7xl pt-10'>{t('home1')} </h1>
            </div>
            <div data-aos="fade-left" className='col-span-3 col-start-2 h-40 justify-end flex bg-[#ffc8dd] hover:bg-[#ffafcc] rounded-lg shadow-2xl'>
                <h1 className='text-black text-7xl pt-10'>{t('home2')} </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Wikipe-tan_manga_page1.jpg" className='h-[17vh] w-[10vw] p-5' />
            </div>
            <div data-aos="fade-right" className='col-span-3 col-start-2 col-end-4 h-40 justify-end flex bg-[#ffc8dd] hover:bg-[#ffafcc] rounded-lg shadow-2xl'>
                <h1 className='text-black text-6xl pt-12 pr-24'>{t('home3')} </h1>
                
            </div>
      </div>
    </div>
  )
}

export default Home