// "use client";
// import { authClient } from "@/lib/auth-client"
import Link from 'next/link';
import Navlink from './Navlink';
import LogoutButtonInNavbar from './LogoutButtonInNavbar';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import { headers } from "next/headers"

const Navbar = async () => {
    // const { data: session, isPending } = authClient.useSession()
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    // console.log(session, user)

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm py-1">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Navlink href="/">Home</Navlink>
                            <Navlink href="/allTiles">All Tiles</Navlink>
                            <Navlink href="/myProfile">My Profile </Navlink>

                        </ul>
                    </div>
                    <Link href="/">
                        <div className='flex gap-1'>
                            <Image src="/logo_40x28.png"
                                width={500} height={500} alt="AutoGlaze Logo" className="w-10 h-7 rounded-lg" />
                            <div className="hidden md:block text-xl font-serif font-light text-gray-600 tracking-widest mb-2">Glaze<span className="text-[#d4a94a] italic">Haus</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-8">
                        <Navlink href="/">Home</Navlink>
                        <Navlink href="/allTiles">All Tiles</Navlink>
                        <Navlink href="/myProfile">My Profile </Navlink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <div className="flex items-center gap-2">
                                <Link href='/myProfile'>
                                    <div className='flex gap-1'>
                                        <h3>{user?.name}</h3>
                                        <Image
                                            src={user?.image} alt=""
                                            width={20} height={20}
                                            className="w-full rounded-full" />
                                    </div>
                                </Link>

                                {/* <Link href="/login" className="" onClick={async () => await authClient.signOut()}><IoLogOutSharp /></Link> */}
                                <LogoutButtonInNavbar />
                            </div>
                        </>
                        : <Link href="/login" className="btn">Login</Link>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;