import { personalInfo } from "@/data/data";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Resume() {
    return (
        <Section
            id="resume"
            title="Resume"
            subtitle="Download my resume"
        >
            <div className="max-w-2xl mx-auto text-center animate-scale-in">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Download My Resume
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Get a comprehensive overview of my skills, experience, and education.
                    </p>

                    <a href={personalInfo.resumeUrl} download>
                        <Button size="lg">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Download PDF
                        </Button>
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                        Add your resume PDF to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">public/resume.pdf</code>
                    </p>
                </div>
            </div>
        </Section>
    );
}
