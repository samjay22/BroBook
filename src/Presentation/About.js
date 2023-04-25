import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

import TopBar from "../Components/NavComponent";
import FooterComponent from "../Components/FooterComponent";
import MissionSection from "../Components/About/MissionSection";
import TeamSection from "../Components/About/TeamSection";

export default function About() {
    const containerVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div>
            <TopBar/>

            <motion.main
                className="main-content py-5"
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                <Container>
                    <MissionSection/>
                    <TeamSection/>
                </Container>
            </motion.main>

            <FooterComponent/>
        </div>
    );
}