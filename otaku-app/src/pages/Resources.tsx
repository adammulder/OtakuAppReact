import React from 'react'
import { useTranslation } from 'react-i18next'

function Resources() {
  const { t, i18n } = useTranslation()

  return (
    <div>
        <div className='bg-gradient-to-tl from-[#bde0fe] to-[#ffc8dd]
            h-[100vh] w-full fixed -z-10'>
        <img src='https://4kwallpapers.com/images/walls/thumbs_3t/9793.jpg' className="w-screen h-[100vh] object-cover absolute mix-blend-overlay -z-10"/>
        </div>
   
        <div className='flex flex-row gap-10 justify-center'>
          <div className='flex flex-col p-10'>
            <div>
              <h1 className='text-5xl text-center'>{t('r1')}</h1>
            </div>
            <div className='p-5'>
              <a href="https://www.crunchyroll.com/"><img src="http://store-images.s-microsoft.com/image/apps.42966.9007199266244356.370cd3e1-1443-49bc-902b-67e1afc6fd9d.fb87303e-4c57-4c85-a8f6-5675b46c1651"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://www.hidive.com/dashboard"><img src="https://i.pcmag.com/imagery/reviews/076PfOqIIVkTpzXteTpPtOL-1.fit_scale.size_760x427.v1610662674.png"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://www.funimation.com/"><img src="https://i0.wp.com/www.theoasg.com/wp-content/uploads/2016/01/FUni.png?ssl=1"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
          </div>
          <div className='flex flex-col p-10'>
            <div>
              <h1 className='text-5xl text-center'>{t('r2')}</h1>
            </div>
            <div className='p-5'>
              <a href="https://theotakubox.com/"><img src="https://cdn.shopify.com/s/files/1/0528/3971/0891/files/6200da4f5c2d61581f7911b4_Favicon_256.png?v=1665860479"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://www.jlist.com/"><img src="https://www.jlist.com/media/argento/luxury/images/jlist-logo-only-1_3.png"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://otakumode.com/"><img src="https://dzt1km7tv28ex.cloudfront.net/static/common/product_logo_shop.svg"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
          </div>
          <div className='flex flex-col p-10'>
            <div>
              <h1 className='text-5xl text-center'>{t('r3')}</h1>
            </div>
            <div className='p-5'>
              <a href="https://mangadex.org/"><img src="https://mangadex.org/img/brand/mangadex-logo.svg"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://www.viz.com/read"><img src="https://assets.viz.com/assets/logo@2x-b76f649f933ea15f45147ff5445a2501c85c7f863ba0aba5ea7bec93c3272cc6.png"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
            <div className='p-5'>
              <a href="https://zinmanga.com/"><img src="https://www.digitalconnectmag.com/wp-content/uploads/2023/03/zinmanga.jpg"
              className='h-[20vh] w-[10vw] rounded-3xl border-8 border-[#a2d2ff] hover:border-white'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Resources