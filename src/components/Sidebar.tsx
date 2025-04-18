'use client';
import { interviewData } from '@/data/interview-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <nav className="w-84">
            <ul className="space-y-2">
                {interviewData.chapters.map((chapter) => (
                    <li key={chapter.id}>
                        <h2 className="font-semibold text-lg mb-2">{chapter.title}</h2>
                        <ul className="ml-4 space-y-1">
                            {chapter.questions.map((question) => {
                                const isActive = pathname === `/questions/${chapter.id}/${question.id}`;
                                return (
                                    <li key={question.id}>
                                        <Link
                                            href={`/questions/${chapter.id}/${question.id}`}
                                            className={`block py-1 ${isActive
                                                ? 'text-white font-medium'
                                                : 'text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            {question.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
} 