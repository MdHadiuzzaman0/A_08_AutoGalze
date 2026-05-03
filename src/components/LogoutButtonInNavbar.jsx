"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { IoLogOutSharp } from 'react-icons/io5';

const LogoutButtonInNavbar = () => {
    return (
        <div>
            <Link href="/login" className="text-2xl text-red-400" onClick={async () => await authClient.signOut()}><IoLogOutSharp /></Link>
        </div>
    );
};

export default LogoutButtonInNavbar;