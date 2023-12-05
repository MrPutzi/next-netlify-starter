import React from 'react';
import { motion } from 'framer-motion';

const Video = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } },
    };
    const videoConstraints = {
        facingMode: "user"
    };

    return (
       <>
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            This is my animated component.
        </motion.div>
        <video>

            <source src="./src/content/cforce_animation.mp4" type="video/mp4" />

        </video>
       </>
    );
};

export default Video;