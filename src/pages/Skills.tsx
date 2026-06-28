import { motion } from "framer-motion";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen snap-start flex flex-col justify-center py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h1>
          <p className="text-l text-gray-600 dark:text-gray-400  mx-auto">
            Here are the technologies and tools I specialize in. I'm constantly
            learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-20">
          {skills.map((skill, index) => (
            <SkillBadge
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              image={skill.image}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="w-240 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto my-12 rounded-full" />
    </motion.div>
  );
};

export default Skills;
