import React from 'react'
import cover from '../assets/images/searchcover.jpg'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';


function AnimeSearch() {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState()
    const [link, setLink] = useState()
    const [link2, setLink2] = useState()
    const [link3, setLink3] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const { t, i18n } = useTranslation()

    const onSubmit = async(searchdata:any) => {
        console.log(searchdata.search);
        await axios.get(`https://api.jikan.moe/v4/anime?q=${searchdata.search}&sfw`)
        .then(response => {
          console.log(response)
          console.log(response.data.data[0].images.jpg.small_image_url)
          setImage(response.data.data[0].images.jpg.image_url)
          setLink(response.data.data[0].url)
          setImage1(response.data.data[1].images.jpg.image_url)
          setLink2(response.data.data[1].url)
          setImage2(response.data.data[2].images.jpg.image_url)
          setLink3(response.data.data[2].url)
        }).catch(err => {
          console.log(err)
        });
    }
  return (

    <div>
        <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
            h-[100vh] w-full fixed -z-10'>
        <img src={cover} className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
        <div className='grid grid-cols-6 gap-4 z-10 pt-80'>
            <div className='bg-transparent col-start-3 col-end-8 text-4xl'>
                <form className='bg-transparent' onSubmit={handleSubmit(onSubmit)} >
                <input className='bg-transparent border-2 border-black rounded-lg' {...register("search")} />
                <button className='bg-[#bde0fe] p-2 rounded-3xl' type='submit'>{t('submit')}</button>
                </form>
            </div>
         </div>
         <div className='grid grid-cols-10 z-10 pt-10'>
            <div className='flex gap-12 col-start-4 col-end-8 '>
            <a href={link}><img src={image} alt="" className='border-4 border-[#a2d2ff] hover:border-[#ffafcc] rounded-md' /></a>
            <a href={link2}><img src={image1} alt="" className='border-4 border-[#a2d2ff] hover:border-[#ffafcc] rounded-md' /></a>
            <a href={link3}><img src={image2} alt="" className='border-4 border-[#a2d2ff] hover:border-[#ffafcc] rounded-md' /></a>
            </div>
         </div>
        </div>
    </div>
  )
}


export default AnimeSearch