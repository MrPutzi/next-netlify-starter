import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function CheckModels() {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const fadeIn = {
        hidden: { opacity: 0, transition: { duration: 2 } },
        visible: { opacity: 1, transition: { duration: 2 } },
    };



    return (
        <div className=" h-96 flex justify-center backdrop-blur-sm rounded-t-full rounded-b-full stroke-gray-600 border-b-4 ">
            <article className= "backdrop-brightness-125 backdrop-blur-2xl  stroke-2 shadow-transparent backdrop-opacity-60">
                <div className=" max-w-4xl text-center">
                    <motion.h1
                        className="text-4xl font-extrabold antialiased text-white dark:text-white sm:text-5xl md:text-6xl mt-20"
                        variants={fadeIn}
                        initial="hidden"
                        animate={controls}
                        ref={ref}
                    >
                        <span className="block">Check models</span>{' '}
                    </motion.h1>
                    <motion.p
                        className="text-xl mt-6 text-white antialiased inset-x-12 dark:text-gray-200"
                        variants={fadeIn}
                        initial="hidden"
                        animate={controls}
                        ref={ref}
                    >
                        Explore our wide range of models. Find the one that suits you best!
                    </motion.p>
                    
                </div>
            </article>
        </div>
    );
}


export default CheckModels