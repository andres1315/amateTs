import { FormLogin } from './FormLogin'
import { LocaleMapMark } from './LocaleMap'

export const SectionLocale = () => {
  return (
    <section
      id="locale"
      className="flex flex-col h-screen w-full relative items-center overflow-hidden justify-center bg-gradient-to-b from-rose-200/30 via-white to-rose-200/30 space-y-10"
    >
      <h2 className=" font-bold text-4xl text-rose-500">Ubicacion</h2>

      <LocaleMapMark/>
    </section>
  )
}
