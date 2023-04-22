import { getProducts } from '@/services/getProducts';
import InputEffect from './InputEffect'


export default async function RootLayout({ children, zona }) {
    const elementos1 = ['Alamar','Plaza de la Revolucion','Marianao','Cerro','Arroyo Naranjo','Habana Vieja','La Lisa','Cotorro','Regla','Guanabacoa','San Miguel del Padron','Cardenas','Cienfuegos','Villa Clara','SSpiritus','Camaguey','Tunas','Santiago','vrtientes'];
    const elementos = await getProducts();
  return (
    <div style={{
        display: 'flex',
        marginLeft: '10vw',
        marginRight: '10vw',
        backgroundColor: '#111',
    }}>
        <aside style={{
            display: 'flex',
            flexDirection: 'column',
            top: '0',
            position: 'sticky',
            backgroundColor: '#111',
            maxHeight: '100vh',
            maxWidth: '20vw'

        }}>
        
        {/* Menu Aside con los Municipios */}
        <InputEffect municipality={elementos} />
        
            
        </aside>
        {zona}
        
    </div>
  )
}
