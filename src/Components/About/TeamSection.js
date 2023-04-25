import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ImageSection from './ImageSection';
import TeamMember from './TeamMember';

export default function TeamSection() {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Founder & CEO',
            skills: ['Leadership', 'Strategy', 'Marketing'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada magna vitae tellus malesuada, ac commodo lorem malesuada.',
            imgSrc: 'https://picsum.photos/200',
        },
        {
            name: 'Jane Smith',
            role: 'Chief Creative Officer',
            skills: ['Design', 'UX', 'Copywriting'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada magna vitae tellus malesuada, ac commodo lorem malesuada.',
            imgSrc: 'https://picsum.photos/200',
        },
        {
            name: 'Bob Johnson',
            role: 'Director of Development',
            skills: ['Programming', 'Project Management', 'Agile'],
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada magna vitae tellus malesuada, ac commodo lorem malesuada.',
            imgSrc: 'https://picsum.photos/200',
        },
    ];

    return (
        <div>
            <ImageSection
                imgSrc="https://picsum.photos/1920/1080"
                title="Meet Our Team"
                subtitle="We're a team of dedicated professionals with a passion for excellence."
            />
            <div className="container my-5">
                <Row>
                    {teamMembers.map((member, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <TeamMember
                                name={member.name}
                                role={member.role}
                                skills={member.skills}
                                description={member.description}
                                imgSrc={member.imgSrc}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
