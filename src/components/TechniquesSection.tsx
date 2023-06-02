
export const TechiniquesSection: React.FC = () => {
  return (
      <section id="techniques" className='flex flex-col h-screen w-full relative items-center overflow-hidden justify-center bg-gradient-to-b from-rose-200/40 via-white to-rose-200/40'>
        <h2 className="absolute top-24 font-bold text-4xl text-gray-700">Nuestros Servicios</h2>
        <div className="galleryImg gap-6 w-4/5">
          <img src='./clasica.webp' alt='gallery1' className='object-cover w-full h-full rounded-lg' />
          <img src='./hibrida.png' alt='gallery1' className='object-cover w-full h-full rounded-lg' />
          <img src='./volumen.png' alt='gallery1' className='object-cover w-full h-full rounded-lg' />

        </div>
      </section>
  )
}
