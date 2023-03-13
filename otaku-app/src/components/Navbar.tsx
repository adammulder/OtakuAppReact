import { Fragment } from 'react'
import logo from '../assets/images/anime3.png'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next'
import LoginButton from './LoginButton'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  };

  const lngs: {[lng:string]: any} =  {
    en: { nativeName: 'English'},
    ch: { nativeName: 'Chinese'}
  };

  

function Navbar() {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
      }

  return (
    <div>
        <nav className="bg-[#CDB4DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20 ">
            <Link to="/">
            <h1 className='text-black text-2xl p-4 font-bold'>
                {t('otaku')}
            </h1>
            </Link>
            <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src={logo}
                  alt="Workflow"
                />
              </div>
            <div className="flex items-center p-20">
              <div className="md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium">
                        {t('anime')}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#ffafcc] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <Link to="/AnimeSearch"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {t('animesearch')}
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link to="/Dashboard"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {t('dashboard')}
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                   <Link to="/Waifu"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {t('waifu')}
                                    </Link>
                                )}
                                </Menu.Item>
                             
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>

                  <Link to="/About"
                    className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    {t('about')}
                    </Link>

                  <Link to="/Resources"
                    className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    {t('resources')}
                    </Link>

                  <Link to="/Fun"
                    className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    {t('fun')}
                    </Link>
                    <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="text-black hover:bg-[#ffc8dd] hover:text-white px-3 py-2 rounded-md font-medium">
                        {t('language')}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#ffafcc] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#" onClick={() => changeLanguage('en')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {t('english')}
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a href="#" onClick={() => changeLanguage('ch')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {t('chinese')}
                                    </a>
                                )}
                                </Menu.Item>
                          
                             
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                        <div>
                          <LoginButton />
                        </div>
                </div>
                
              </div>
           
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar