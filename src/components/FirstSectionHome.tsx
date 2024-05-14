export const FirstSectionHome: React.FC = () => {
  return (

    <section
      id="mainSection"
      className='flex flex-col h-screen w-full relative items-center overflow-hidden'>
      <div className='absolute w-full md:block hidden top-0 bottom-0 '>
        <img src='bg_home.webp' alt='bg_home' className='object-cover ' />
      </div>
      <h1 className='absolute font-bold text-2xl   md:text-xl lg:text-4xl xl:text-5xl md:text-gray-700 leading-tigh md:top-36 md:left-12 top-24 text-rose-300'>
          Resalta tu
        <span className='md:text-white text-rose-400 font-bold'> belleza </span>
        natural <span className='md:hidden'>💗</span>
      </h1>
      <p className='absolute font-semibold text-gray-700 flex xl:justify-end  text-xl md:top-48 md:left-64 top-32'>Pestañas <span className="mx-2 text-rose-400 md:text-gray-700"> Hermosas </span>  en todo momento </p>
      <img src='logocircle.png' className='absolute w-full md:w-1/3 top-40 md:top-60 md:left-24'/>
    </section>

  )
}
