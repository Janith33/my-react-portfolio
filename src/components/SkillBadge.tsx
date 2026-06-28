import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon: string;
  image?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  index: number;
}

const SkillBadge = ({ name, icon, image, level, index }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300"
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-12 h-12 mb-3 object-contain" 
        />
      ) : (
        <div className="text-4xl mb-3" dangerouslySetInnerHTML={{ __html: icon }} />
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{name}</h3>
      {level && (
        <span className="mt-2 text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
          {level}
        </span>
      )}
    </motion.div>
  );
};

export default SkillBadge;