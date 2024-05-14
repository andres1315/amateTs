import { BentoGallery } from '../components/BentoGallery'
import { FirstSectionHome } from '../components/FirstSectionHome'
import { HeaderHome } from '../components/HeaderHome'
import { SectionLocale } from '../components/SectionLocale'
import { TechiniquesSection } from '../components/TechniquesSection'
import './Home.css'
export const Home: React.FC = () => {
  return (
    <div>
      <HeaderHome />
      <main className='snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-smooth'>

        <div className='snap-center'>
          <FirstSectionHome />
        </div>

        <div className='snap-center'>
          <TechiniquesSection />
        </div>

        <div className='snap-center'>
          <BentoGallery />
        </div>
        <div className='snap-center'>
          <SectionLocale />
        </div>

      </main>

    </div>
  )
}
