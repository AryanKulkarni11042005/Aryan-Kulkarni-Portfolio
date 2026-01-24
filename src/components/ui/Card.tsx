import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    style?: React.CSSProperties;
}

export default function Card({ children, className = "", hover = true, style }: CardProps) {
    return (
        <div
            style={style}
            className={`
        bg-white dark:bg-gray-800 
        rounded-xl 
        border border-gray-200 dark:border-gray-700 
        shadow-lg 
        p-6
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
