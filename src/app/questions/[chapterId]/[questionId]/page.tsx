import { interviewData } from '@/data/interview-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CodeBlock } from '@/components/ui';

interface QuestionPageProps {
    params: {
        chapterId: string;
        questionId: string;
    };
}

export default function QuestionPage({ params }: QuestionPageProps) {

    const { chapterId, questionId } = params;
    const chapter = interviewData.chapters.find(c => c.id === chapterId);
    if (!chapter) notFound();

    const question = chapter.questions.find(q => q.id === questionId);
    if (!question) notFound();

    const currentIndex = chapter.questions.findIndex(q => q.id === questionId);
    const prevQuestion = currentIndex > 0 ? chapter.questions[currentIndex - 1] : null;
    const nextQuestion = currentIndex < chapter.questions.length - 1 ? chapter.questions[currentIndex + 1] : null;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/" className="text-blue-500 hover:underline">
                    ← Back to Chapters
                </Link>
                <h1 className="text-3xl font-bold mt-4">{chapter.title}</h1>
                <h2 className="text-2xl font-semibold mt-2">{question.title}</h2>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Answer:</h3>
                    <div className="whitespace-pre-wrap">{question.answer.text}</div>
                </div>

                {question.answer.example && (
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Example:</h3>
                        <CodeBlock>{question.answer.example}</CodeBlock>
                    </div>
                )}
            </div>

            <div className="mt-8 flex justify-between">
                {prevQuestion && (
                    <Link
                        href={`/questions/${chapterId}/${prevQuestion.id}`}
                        className="text-blue-500 hover:underline"
                    >
                        ← Previous: {prevQuestion.title}
                    </Link>
                )}
                {nextQuestion && (
                    <Link
                        href={`/questions/${chapterId}/${nextQuestion.id}`}
                        className="text-blue-500 hover:underline"
                    >
                        Next: {nextQuestion.title} →
                    </Link>
                )}
            </div>
        </div>
    );
} 