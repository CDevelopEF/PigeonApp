import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'MyApp',
  description: 'PigeonEvents',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }} className='Linksprops'>

      <Link href={'/eventos/Plaza de la Revolucion'} className='Linksprops'>      Proximos Eventos </Link>
      <Link href={'/compra-venta'} className='Linksprops'> Compra Venta </Link>
      <Link href={'/about'} className='Linksprops'>        Acerca de </Link>
      </nav>
      <>
        {children}
      </>
      
      </body>
    </html>
  )
}
