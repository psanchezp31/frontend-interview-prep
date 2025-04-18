import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
    language?: string;
    children: string;
}

export default function CodeBlock({ language = 'javascript', children }: CodeBlockProps) {
    return (
        <div className="my-4 rounded-lg overflow-hidden">
            <SyntaxHighlighter
                language={language}
                style={tomorrow}
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    backgroundColor: '#2d2d2d',
                }}
                showLineNumbers
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
} 