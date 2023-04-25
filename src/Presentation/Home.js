import React from 'react';
import { motion } from 'framer-motion';

import HeaderSection from '../Components/Home/HeaderSection';
import MissionSection from '../Components/Home/MissionSection';
import EventsSection from '../Components/Home/EventsSection';
import TopBar from '../Components/NavComponent';
import FooterComponent from '../Components/FooterComponent';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <TopBar />
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <HeaderSection />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <MissionSection />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <EventsSection />
            </motion.div>
            <FooterComponent />
        </motion.div>
    );
}
