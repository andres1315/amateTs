import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#mainSection', current: true },
  { name: 'Tecnicas', href: '#techniques', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
]

function classNames (...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const HeaderHome: React.FC = () => {
  return (
    <header className='fixed top-0 w-full z-40'>
      <Disclosure as="nav" className="bg-rose-100 md:bg-rose-100/90 ">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {(open)
                      ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        )
                      : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="logo.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-14 w-auto lg:block"
                      src="logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block md:w-full md:flex md:justify-around">
                    <div className="flex items-center content-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-rose-600 text-bold text-lg' : 'text-gray-600 h-[90%] flex items-center content-center transition ease-in-out delay-150   hover:scale-110 hover:bg-rose-400/40 hover:text-white duration-300',
                            'rounded-md  px-6 text-sm font-medium '
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='hidden lg:flex lg:items-center lg:justify-center'>
                    {/* Socials Facebook, instagram, whatsapp */}
                    <div className="flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                      <a href="https://wa.me/573113830827/?text=Hola. Quiero agendar una cita" target='_blank' rel='noreferrer' className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">WhatsApp</span>
                        <img src='whatsapp.svg' alt='facebook' className='h-12 w-auto' />
                      </a>
                      <a href="https://www.instagram.com/amate__love/" target='_blank' rel='noreferrer' className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <img src='instagram.svg' alt='instagram' className='h-10 w-auto' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
}
