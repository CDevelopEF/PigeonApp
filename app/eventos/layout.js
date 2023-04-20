import InputEffect from './InputEffect'


export default function RootLayout({ children, zona }) {
    const elementos = ['Alamar','Plaza de la Revolucion','Marianao','Cerro','Arroyo Naranjo','Habana Vieja','La Lisa','Cotorro','Regla','Guanabacoa','San Miguel del Padron','Cardenas','Cienfuegos','Villa Clara','SSpiritus','Camaguey','Tunas','Santiago','vrtientes'];

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
            maxHeight: '100vh'

        }}>
        
        {/* Menu Aside con los Municipios */}
        <InputEffect municipality={elementos} />
        
            
        </aside>
        {zona}
        
    </div>
  )
}
