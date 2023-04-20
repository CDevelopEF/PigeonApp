import Link from 'next/link'


export default function RootLayout({ children, views }) {
  return (
    <>
    <Link href={'/about/views'}> Link to Views</Link>
    <Link href={'/about/chat'}> Link to Chats</Link>
    <div>{children}</div>
    <h1 style={{fontWeight: 'bolder', color: '#333'}}>Ruta Views</h1>
    <div>
        {views}
    </div>
    </>
  )
}
