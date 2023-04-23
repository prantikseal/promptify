import { Poppins } from 'next/font/google'
import Navbar from '../../components/NavBar'
import SectionMenu from '../../components/SectionMenu'
import Dashboard from '../../components/Dashboard'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
 })

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionMenu  />  
      <Dashboard/>  
    </>
  )
}
