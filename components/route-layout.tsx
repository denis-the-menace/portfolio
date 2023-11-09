import { motion } from "framer-motion";

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0,  x: -10 }}
      transition={{ duration: 1 }}
      className="flex gap-20 my-4 mr-8 ml-20"
    >
      {children}
    </motion.div>
  );
}
