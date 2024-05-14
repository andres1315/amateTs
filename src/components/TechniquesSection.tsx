
export const TechiniquesSection: React.FC = () => {
  return (
      <section id="techniques" className='flex flex-col h-screen w-full relative items-center overflow-hidden justify-center bg-gradient-to-b from-rose-200/30 via-white to-rose-200/30 space-y-10'>
        <h2 className=" font-bold text-4xl text-rose-500/80">Nuestros Servicios</h2>
        <div className="galleryImg gap-6 w-[95%] md:top-16 flex flex-col md:flex-row overflow-auto md:overflow-hidden">
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Clasica</span>
            <img src='./clasica.webp' alt='clasica' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500 ">Hibrida</span>
            <img src='./hibrida.webp' alt='hibirda' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Volumen</span>
            <img src='./volumen.webp' alt='volumen' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Fibra Tecnologia</span>
            <img src='./mega.webp' alt='mega' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Lifting</span>
            <img src='./Lifting.webp' alt='lifting' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>

        </div>
      </section>
  )
}
