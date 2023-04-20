import Link from 'next/link'
import React from 'react'

function ViewsPage() {
  return (
    <div>
    <h1>ViewsPage</h1>
    <Link href={'/about/views'}> Link to Views</Link>
    <Link href={'/about/chat'}> Link to Chats</Link>

</div>
  )
}

export default ViewsPage