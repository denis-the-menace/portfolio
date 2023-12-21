import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center m-20"
    >
      <h1 className="text-center text-3xl">404 - Page Not Found</h1>
    </motion.div>
  );
}
