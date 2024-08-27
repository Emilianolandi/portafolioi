"use client"

import { motion } from "framer-motion";
import { fadeIn } from "@/utilis/motion-transition";

export type MotionTransitionProps = {
    children: React.ReactNode;
    position: 'right' | 'bottom'
    className?: string;
};

export function MotionTransition(props: MotionTransitionProps) {
    const { children, className, position } = props

    return (
        <motion.div
            variants={fadeIn(position)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={className}
        >
            {children}
        </motion.div>
    )
}
export default MotionTransition