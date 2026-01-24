import React from "react";

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {title && (
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
