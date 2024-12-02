import ReactMarkdown from 'react-markdown';

export default function RoadmapDialog({ mdContent, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <article className="prose prose-slate max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-6 mb-4" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                            a: ({ node, ...props }) => (
                                <a
                                    className="text-blue-600 hover:text-blue-800 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    {...props}
                                />
                            ),
                            strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props} />
                            ),
                            code: ({ node, ...props }) => (
                                <code className="bg-gray-100 rounded px-1 py-0.5" {...props} />
                            ),
                            pre: ({ node, ...props }) => (
                                <pre className="bg-gray-100 rounded p-4 overflow-x-auto mb-4" {...props} />
                            ),
                        }}
                    >
                        {mdContent}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    );
}