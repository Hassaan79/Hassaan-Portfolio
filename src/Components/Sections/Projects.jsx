import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Expense Tracker</h3>
                            <p className="text-gray-400 mb-4">
                                Track your income and expenses with this simple, intuitive budget
                                app.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "vite"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https://hassaan79.github.io/Expense-Tracker/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">To-Do list</h3>
                            <p className="text-gray-400 mb-4">
                                Simple to-do list app with add-and-drop functionality.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Vite"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://hassaan79.github.io/To-Do-App/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
                            <p className="text-gray-400 mb-4">
                                A quiz app that lets you test your knowledge on various topics.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Reaact"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://hassaan79.github.io/Quiz-App/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Calculator App</h3>
                            <p className="text-gray-400 mb-4">
                                A simple calculator app that lets you perform basic arithmetic
                                operations.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://hassaan79.github.io/React-Claculator-App/"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
