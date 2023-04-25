import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function TeamMember({ name, imgSrc, description, role, skills }) {
    return (
        <div className="team-member-card-container">
            <Card className="team-member-card" bg="light" text="dark">
                <Card.Img className="team-member-image" variant="top" src={imgSrc} alt={name} />
                <Card.Body>
                    <div className="team-member-text-container">
                        <Card.Title className="team-member-name">{name}</Card.Title>
                        <Card.Text className="team-member-description">{description}</Card.Text>
                        <Badge pill variant="dark" className="team-member-role">
                            {role}
                        </Badge>
                        <div className="team-member-skills">
                            {skills.map((skill) => (
                                <Badge key={skill} pill variant="primary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
