import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Question Not Found</h2>
            <p className="text-gray-600 mb-8">The question you&apos;re looking for doesn&apos;t exist.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Return to Home
            </Link>
        </div>
    );
} 