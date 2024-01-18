
import './globals.css'
import Navbar from "../Components/Navbar/Navbar"
import Footer from '@/Components/Footer/Footer'

export const metadata = {
  title: 'Trek It Himalayas',
  description: 'See Explore Enjoy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
