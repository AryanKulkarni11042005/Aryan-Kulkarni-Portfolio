import { skills } from "@/data/data";
import Section from "../ui/Section";

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Skills"
            subtitle="Technologies I work with"
        >
            <div className="max-w-5xl mx-auto space-y-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <div
                        key={category}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
