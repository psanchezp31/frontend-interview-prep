import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Frontend Interview Preparation</h1>
        <p className="text-lg mb-8">
          A comprehensive collection of frontend interview questions covering JavaScript, React, HTML, Vue,
          Clean Code Practices, and REST API concepts. Each question includes detailed explanations and
          practical code examples to help you prepare for your next frontend interview.
        </p>
        <Link
          href="/questions/javascript/js-1"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
