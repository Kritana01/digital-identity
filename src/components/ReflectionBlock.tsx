import { motion } from "framer-motion";

interface ReflectionBlockProps {
  children: React.ReactNode;
  title?: string;
}

export function ReflectionBlock({ children, title }: ReflectionBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45 }}
      className="glass rounded-2xl p-6 sm:p-8"
    >
      {title && (
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      )}
      <div className={title ? "mt-4 space-y-4" : "space-y-4"}>{children}</div>
    </motion.div>
  );
}
