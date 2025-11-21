import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen snap-start py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/profile.png"
                  alt="Janith Chandupa"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Full Stack Developer from Sri Lanka
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full stack developer with a keen eye for design
              and a commitment to creating intuitive, responsive web
              applications. With a strong foundation in modern JavaScript
              frameworks and libraries, I specialize in building elegant, fast,
              and user-friendly interfaces and also back end experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-green-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    🎓 Education
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Bachelor of Information and Communication Technology Honours
                  in University of Vavuniya, with a focus on web technologies
                  and user interface design and back end of the web application.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    💼 Experience
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Front End and Back End experience with doing individual and
                  group project, building responsive web application and
                  collaborations with modern design terms.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    🌱 Learning
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently expanding my skills in Next.js and TypeScript to
                  build more robust and type-safe applications. And also I still
                  learning about node.js/express.js and react.Currently
                  expanding my skills in Next.js and TypeScript to build more
                  robust and type-safe applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    ✨ Interests
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  UI/UX design, web accessibility, performance optimization, and
                  exploring new frontend and backend technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    <div className="w-240 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto my-12 rounded-full" />
    </motion.div>
  );
};

export default About;
