import { Link } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <div>
            <h2>Header</h2>
            <nav>
                <Link href="/">Home</Link> |{" "}
                <Link href="/about">About</Link> |{" "}
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    )
}   
export default Header;
