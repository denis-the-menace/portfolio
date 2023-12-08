import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center m-20"
    >
      <h1 className="text-center text-3xl">404 - Page Not Found</h1>
    </motion.div>
  );
}
