
import Label from "./components/Label";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="flex px-40 items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -200 }}
        animate={{ opacity: 1, scale: 1.5, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Label />
      </motion.div>
    </div>
  );
}

export default App;
