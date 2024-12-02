import React from 'react'
import mdContent from '../public/content/guide/comprehensive-guide.md'
import ReactMarkdown from 'react-markdown'
import GradientText from './GradientTesxt'

const ComprehensiveGuidelines = ({ className }) => {
    return (
        <div className='text-white mt-20 w-full flex flex-col'>
            <GradientText size="7xl" className={'mx-auto pb-3 mb-20'}>Migration Guidelines</GradientText>

            <ReactMarkdown
                className={className}
                components={{
                    h1: ({ node, children, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props}>{children}</h1>,
                    h2: ({ node, children, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-4" {...props}>{children}</h2>,
                    h3: ({ node, children, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props}>{children}</h3>,
                    p: ({ node, children, ...props }) => <p className="mb-4" {...props}>{children}</p>,
                    ul: ({ node, children, ...props }) => <ul className="list-disc pl-6 mb-4" {...props}>{children}</ul>,
                    ol: ({ node, children, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props}>{children}</ol>,
                    li: ({ node, children, ...props }) => <li className="mb-1" {...props}>{children}</li>,
                    a: ({ node, children, href, ...props }) => (
                        <a
                            href={href}
                            className="text-blue-600 hover:text-blue-800 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            {...props}
                        >
                            {children}
                        </a>
                    ),
                    strong: ({ node, children, ...props }) => <strong className="font-bold" {...props}>{children}</strong>,
                    blockquote: ({ node, children, ...props }) => (
                        <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props}>
                            {children}
                        </blockquote>
                    ),
                    code: ({ node, children, ...props }) => (
                        <code className="bg-gray-800 rounded px-1 py-0.5" {...props}>
                            {children}
                        </code>
                    ),
                    pre: ({ node, children, ...props }) => (
                        <pre className="bg-gray-800 rounded p-4 overflow-x-auto mb-4" {...props}>
                            {children}
                        </pre>
                    ),
                }}
            >
                {mdContent}
            </ReactMarkdown>
        </div>
    )
}


export default ComprehensiveGuidelines