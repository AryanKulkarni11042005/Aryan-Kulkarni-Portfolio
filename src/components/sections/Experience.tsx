import { experience } from "@/data/data";
import Section from "../ui/Section";

export default function Experience() {
    return (
        <Section
            id="experience"
            title="Experience"
            subtitle="My professional journey"
        >
            <div className="max-w-4xl mx-auto">
                {experience.map((exp, index) => (
                    <div
                        key={exp.id}
                        className="relative pl-8 pb-12 last:pb-0 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Timeline line */}
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-4 h-4 -ml-[7px] rounded-full bg-blue-600 border-4 border-blue-50 dark:border-gray-900" />

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {exp.title}
                                </h3>
                                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                                {exp.company}
                            </p>

                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                {exp.location}
                            </p>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <svg
                                            className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
