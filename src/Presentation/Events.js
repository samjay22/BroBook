import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

import TopBar from '../Components/NavComponent';
import FooterComponent from '../Components/FooterComponent';
import EventComp from "../Components/Events/Event"
import { EventDetails } from "../Components/Events/EventDetails";

export default function Events({ChurchService}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const events = await ChurchService.FetchEvents();
            setEventsList(events);
        };

        if (!eventsList.length) {
            fetchData();
        }
    }, [eventsList]);

    const handleShowModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
        setShowModal(false);
    };

    return (
        <div>
            <TopBar/>

            <AnimatePresence>
                <motion.main
                    className="main-content py-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Container>
                        <Row>
                            {eventsList.map((event) => (
                                <Col md={4} key={event.id}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <EventComp
                                            event={event}
                                            displayModalCallback={handleShowModal}
                                        />
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </motion.main>
            </AnimatePresence>

            <EventDetails
                showModal={showModal}
                selectedEvent={selectedEvent}
                handleCloseModal={handleCloseModal}
            ></EventDetails>

            <FooterComponent />
        </div>
    );
}
