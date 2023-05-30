import { HeaderHome } from '../components/HeaderHome'

export const Home: React.FC = () => {
  return (
    <main>
      <header className='fixed top-0 w-full z-50'>
        <HeaderHome />
      </header>

      <section
        id='team'
        className='flex flex-col h-full  bg-no-repeat relative items-center '>
        <img src='bg_home.jpg' alt='bg_home' className='w-full md:block hidden' />
        <h1 className='absolute font-bold text-2xl   md:text-xl lg:text-4xl xl:text-5xl md:text-gray-800 leading-tigh md:top-36 md:left-12 top-24 text-rose-300'>
            Resalta tu
          <span className='md:text-white text-rose-400 font-bold'> belleza </span>
          natural <span className='md:hidden'>💗</span>
        </h1>
        <p className='absolute font-semibold text-gray-800 flex xl:justify-end  text-xl md:top-48 md:left-64 top-32'>Pestañas <span className="mx-2 text-rose-400 md:text-gray-800"> Hermosas </span>  en todo momento </p>
        <img src='logocircle.png' className='absolute w-1/3 md:top-60 md:left-24'/>
      </section>

    </main>
  )
}
