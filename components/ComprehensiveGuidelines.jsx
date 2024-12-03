import React from 'react'
import MdContent from '../content/guide/comprehensive-guide.md'
import ReactMarkdown from 'react-markdown'
import GradientText from './GradientText'

const markdownStyles = {
    h1: "text-3xl font-bold mb-4",
    h2: "text-2xl font-semibold mt-6 mb-4",
    h3: "text-xl font-semibold mt-4 mb-2",
    p: "mb-4",
    ul: "list-disc pl-6 mb-4",
    ol: "list-decimal pl-6 mb-4",
    li: "mb-1",
    a: "text-blue-600 hover:text-blue-800 underline",
    blockquote: "border-l-4 border-gray-200 pl-4 italic my-4",
    code: "bg-gray-800 rounded px-1 py-0.5",
    pre: "bg-gray-800 rounded p-4 overflow-x-auto mb-4"
}

const ComprehensiveGuidelines = ({ className }) => {
    const createComponent = (tag, baseStyle) => {
        return ({ children, ...props }) => {
            const Element = tag
            return <Element className={baseStyle} {...props}>{children}</Element>
        }
    }

    const components = {
        h1: createComponent('h1', markdownStyles.h1),
        h2: createComponent('h2', markdownStyles.h2),
        h3: createComponent('h3', markdownStyles.h3),
        p: createComponent('p', markdownStyles.p),
        ul: createComponent('ul', markdownStyles.ul),
        ol: createComponent('ol', markdownStyles.ol),
        li: createComponent('li', markdownStyles.li),
        blockquote: createComponent('blockquote', markdownStyles.blockquote),
        code: createComponent('code', markdownStyles.code),
        pre: createComponent('pre', markdownStyles.pre),
        a: ({ href, children, ...props }) => (
            <a
                href={href}
                className={markdownStyles.a}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        )
    }

    return (
        <div className='text-white mt-20 w-full flex flex-col'>
            <GradientText size="7xl" className='mx-auto pb-3 mb-20'>
                Migration Guidelines
            </GradientText>

            <ReactMarkdown className={className} components={components}>
                {MdContent}
            </ReactMarkdown>
        </div>
    )
}

export default ComprehensiveGuidelines