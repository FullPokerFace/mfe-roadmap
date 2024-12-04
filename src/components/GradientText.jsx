// components/GradientText.jsx
import React from 'react';
import classNames from 'classnames'; // Make sure to install this package

const GradientText = ({
    children,
    size = 'base', // default size
    className,
    ...props
}) => {
    const sizeClasses = {
        'xs': 'text-xs',
        'sm': 'text-sm',
        'base': 'text-base',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '5xl': 'text-5xl',
        '7xl': 'text-7xl',
    };

    return (
        <span
            className={classNames(
                'inline-block bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 text-transparent bg-clip-text',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export default GradientText;