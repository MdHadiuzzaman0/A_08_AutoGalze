"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navlink = ({href, children}) => {
    const pathName = usePathname();
    // console.log(pathName)
    const isActive = href === pathName;
    return (
        <div>
            <Link href={href} className={`${isActive? "text-amber-500" : ""}`}>{children}</Link>
        </div>
    );
};

export default Navlink;