import { AnimatePresence } from 'framer-motion'
import React from "react";
const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {
        open && (
          <motion
           initial={{opacity: 0, y: -100}}
           animate={{opacity: 2, y: 0}}
           exit={{opacity: 0, y: -100}}
           transition={{type: 'tween', duration: 0.2}}
           className="absolute top-20 left-0 w-full h-screen z-20">
            <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
               <ul className="flex flex-col justify-center items-center gap-10">
                <li>Women</li>
                <li>Men</li>
                <li>Designer</li>
                <li>Kids</li>
                <li>Home</li>
                <li>Electronics</li>
               </ul>
            </div>
            </motion>
        )
        }
    </AnimatePresence>
    
  );
};

export default ResponsiveMenu