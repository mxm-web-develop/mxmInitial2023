import { useState } from 'react'
import Label from './components/Label'
import { motion } from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex px-40 items-center justify-center text-center">
      
      <Label />
    </div>
  )
}

export default App
