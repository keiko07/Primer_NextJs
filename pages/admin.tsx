import React from 'react'
import Link from 'next/link';

export const admin = () => {
    return (
        <div>
            <h1>Admin</h1>
            <Link href="/">
                <a className="cursor-pointer">Volver a pagina principal</a>
            </Link>
        </div>
    )
}

export default admin
