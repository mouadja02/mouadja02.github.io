import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TitleBlock from '@/components/sections/TitleBlock'
import Specs from '@/components/sections/Specs'
import Pinout from '@/components/sections/Pinout'
import ReferenceDesigns from '@/components/sections/ReferenceDesigns'
import Timing from '@/components/sections/Timing'
import Credentials from '@/components/sections/Credentials'
import Ordering from '@/components/sections/Ordering'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TitleBlock />
        <Specs />
        <Pinout />
        <ReferenceDesigns />
        <Timing />
        <Credentials />
        <Ordering />
      </main>
      <Footer />
    </>
  )
}
