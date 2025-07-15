import React from "react";
// eslint-disable-next-line
import { motion } from "motion/react";

const Navbutton = ({ open, setOpen }) => {

// THREE BURGER MENU    
//   const path1Variants = {
//     open: { d: "M3.06061 2.99999L21.0606 21" },
//     closed: { d: "M0 5.5L24 5.5" },
//   };
//   const path2Variants = {
//     open: { d: "M0 12L24 12", opacity: 0 },
//     closed: { d: "M0 12L24 12", opacity: 1 },
//   };
//   const path3Variants = {
//     open: { d: "M3.00006 21.0607L21 3.06064" },
//     closed: { d: "M0 18.5L24 18.5" },
//   };

// TWO BURGER MENU
const path1Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 7L24 7" }, // moved from 5.5 to 7
};

const path3Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  closed: { d: "M0 15L24 15" }, // moved from 18.5 to 15
};

  const transition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
    type: "tween",
  };

  return (
    <motion.div
      onClick={() => setOpen(!open)}
      className="relative justify-center flex flex-col items-center gap-2 cursor-pointer z-50 stroke-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <motion.path
          variants={path1Variants}
          animate={open ? "open" : "closed"}
          transition={transition}
          initial={false} // ✅ prevents SSR mismatch
        />
        {/* <motion.path
          variants={path2Variants}
          animate={open ? "open" : "closed"}
          transition={transition}
          initial={false}
        /> */}
        <motion.path
          variants={path3Variants}
          animate={open ? "open" : "closed"}
          transition={transition}
          initial={false}
        />
      </svg>
    </motion.div>
  );
};

export default Navbutton;
