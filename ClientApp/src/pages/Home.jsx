﻿import '../styles/App.css'
import { useEffect, useState } from 'react';
import { Possibility, Features, Info, Header } from '../containers';
import { CTA, BackToTopButton } from '../components';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const Box = ({ children }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    );
};

export function Home() {
    const [hang, setHang] = useState(() => {
        var hangJson = localStorage.getItem('HANG');
        var parseValue = JSON.parse(hangJson);
        return parseValue == null ? null : parseValue;
    });

    return (
                <div className="App">
                    <div className="gradient__bg">
                        <Header />
                    </div>
                    <BackToTopButton />
                    <Box>
                    <Info Hang={hang} />
                    </Box>
                    <Box>
                        <Features />
                    </Box>
                    <Box>
                        <Possibility />
                    </Box>

                    <Box>
                        <CTA />
                    </Box>
                </div>
    );
}
