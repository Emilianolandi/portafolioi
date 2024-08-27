"use client"

import { transitionVariantsPage } from "@/utilis/motion-transition";
import { AnimatePresence, motion } from "framer-motion";


const TransitionPage = () =>{

    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="transition-page"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionPage;