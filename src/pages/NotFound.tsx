import { useNavigate } from 'react-router-dom'

export const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="grid w-screen h-screen place-items-center content-center bg-white px-6 py-24 sm:py-32 lg:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-50 via-rose-100/75 to-rose-200/75" >
        <div className="text-center">
          <p className="text-base font-semibold text-rose-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl">Pagina no encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-700">Lo sentimos, no hemos podido encontrar la página que busca.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => { navigate('/') }}
              className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              Ir al inicio
            </button>

          </div>
        </div>
      </main>
  )
}
