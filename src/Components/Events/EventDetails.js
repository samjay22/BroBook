import {Button, Modal} from "react-bootstrap";
import React from "react";

export function EventDetails({showModal, selectedEvent, handleCloseModal}){
    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">{selectedEvent && selectedEvent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center mb-3">
                    <img src={selectedEvent && selectedEvent.imageUrl} alt={selectedEvent && selectedEvent.title} className="img-fluid" />
                </div>
                {selectedEvent && (
                    <>
                        <p className="fw-bold">Description:</p>
                        <p className="mb-4">{selectedEvent.description}</p>
                        <p className="fw-bold">Location:</p>
                        <p className="mb-4">{selectedEvent.location}</p>
                        <p className="fw-bold">Date:</p>
                        <p className="mb-4">{new Date(selectedEvent.eventDate).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</p>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}