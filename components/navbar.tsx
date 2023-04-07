import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="px-4 py-2 w-screen">
            <h1 className='text-7xl font-semibold'>
                BRIDGER BROWN
            </h1>
            <ul className='flex space-x-4 text-lg'>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Music
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};