"use client"

import React from "react"
import { motion } from "framer-motion"

const FallingCodeBackground: React.FC = () => {
  const codeLines = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute text-green-500 opacity-20 text-sm"
      initial={{ y: -100, x: Math.random() * window.innerWidth }}
      animate={{
        y: window.innerHeight + 100,
        transition: {
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      style={{
        left: `${Math.random() * 100}%`,
      }}
    >
      {generateRandomCode()}
    </motion.div>
  ))

  return <div className="fixed inset-0 overflow-hidden pointer-events-none">{codeLines}</div>
}

const generateRandomCode = () => {
  const codeSnippets = [
    "const x = 42;",
    "function foo() {",
    "return true;",
    "if (x > y) {",
    "console.log(",
    "import React",
    "export default",
    "<div className=",
    "useState(",
    "useEffect(() => {",
  ]
  return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
}

export default FallingCodeBackground

