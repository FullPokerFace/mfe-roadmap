import { useState } from 'react';
import ReactMarkdown from 'react-markdown';


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border bg-gray-900 border-gray-300 rounded-lg overflow-hidden"
                >
                    <div
                        className="p-6 flex gap-4 items-center cursor-pointer hover:border-blue-500 transition-colors duration-200"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-white text-2xl">
                            {activeIndex === index ? '-' : '+'}
                        </span>
                        <h3 className="text-xl font-semibold text-white">
                            {item.title}
                        </h3>
                    </div>

                    {activeIndex === index && (
                        <div className="p-6  text-gray-300 border-t border-gray-700 max-w-3xl">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-sky-200  text-3xl font-bold " {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-sky-200  text-2xl font-semibold " {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-sky-200  text-xl font-semibold " {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-10" {...props} />,
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
                                {item.description}

                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;