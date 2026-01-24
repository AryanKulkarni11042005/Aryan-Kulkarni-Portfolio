import { about } from "@/data/data";
import Section from "../ui/Section";

export default function About() {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="Get to know me better"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <svg
                                className="w-32 h-32 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                        Add your profile image to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/profile.jpg</code>
                    </p>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                        {about.summary}
                    </p>
                </div>
            </div>
        </Section>
    );
}
