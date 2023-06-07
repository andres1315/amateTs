
export const TechiniquesSection: React.FC = () => {
  return (
      <section id="techniques" className='flex flex-col h-screen w-full relative items-center overflow-hidden justify-center bg-gradient-to-b from-rose-200/30 via-white to-rose-200/30 space-y-10'>
        <h2 className=" font-bold text-4xl text-rose-500">Nuestros Servicios</h2>
        <div className="galleryImg gap-6 w-4/5 md:top-16 flex flex-col md:flex-row overflow-auto md:overflow-hidden">
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Clasica</span>
            <img src='./clasica.webp' alt='gallery1' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500 ">Hibrida</span>
            <img src='./hibrida.png' alt='gallery1' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Volumen</span>
            <img src='./volumen.png' alt='gallery1' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>
          <div className="relative">
            <span className="absolute top-4 font-semibold text-3xl ml-6 text-gray-700 hover:text-rose-500">Mega Volumen</span>
            <img src='./mega.png' alt='gallery1' className='object-cover w-full h-full rounded-lg border shadow-lg shadow-rose-300/30' />
          </div>

        </div>
      </section>
  )
}
