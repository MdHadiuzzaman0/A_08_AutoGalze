import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="text-3xl font-bold mt-4 text-gray-800">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
                This page maybe deleted or You enter the wrong link
            </p>
            <Link href="/" className="btn btn-neutral mt-6 px-8">
                Back to Home
            </Link>
        </div>
    );
}