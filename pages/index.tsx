import React from 'react';
import type { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Pagina index</p>
      <Link href="/admin">
        <a className='cursor-pointer'>ir a usuarios</a>
      </Link>
    </div>
  )
}

export default Home
