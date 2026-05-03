// "use client";
import { authClient } from "@/lib/auth-client"
import Link from 'next/link';
import Image from 'next/image';
import { auth } from "@/lib/auth";
import { headers } from "next/headers"


const page = async () => {

    // const { data: session } =  authClient.useSession(); // client side
    const session = await auth.api.getSession({  // server side
        headers: await headers()
    })
    const user = session?.user;

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>

                <div className="flex flex-col items-center space-y-4">
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image src={user?.image} alt="User Profile" width={50} height={50} />
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-semibold">{user?.name}</h3>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>

                    <Link
                        href="/myProfile/update"
                        className="btn btn-neutral w-full mt-4"
                    >
                        Update Information
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;