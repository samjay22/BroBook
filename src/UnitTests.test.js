import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import ImageSection from './Components/About/ImageSection';
import MissionSection from "./Components/Home/MissionSection";
import TeamMember from "./Components/About/TeamMember";


describe('ImageSection component', () => {
    it('renders the image with the correct src and alt text', () => {
        const src = 'https://example.com/image.jpg';
        const alt = 'Example image';
        const { getByAltText } = render(<ImageSection src={src} alt={alt} />);
        const imageElement = getByAltText(alt);
        expect(imageElement).toHaveAttribute('src', src);
    });
});

test('renders mission section', () => {
    const { getByAltText, getByText } = render(<MissionSection />);
    const missionImage = getByAltText(/Our Mission/);
    expect(missionImage).toBeInTheDocument();
});

const member = {
    name: 'John Doe',
    role: 'Founder & CEO',
    skills: ['Leadership', 'Strategy', 'Marketing'],
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada magna vitae tellus malesuada, ac commodo lorem malesuada.',
    imgSrc: 'https://picsum.photos/200',
};

test('renders team member', () => {
    const { getByText } = render(<TeamMember {...member} />);
    const memberName = getByText(member.name);
    const memberRole = getByText(member.role);
    expect(memberName).toBeInTheDocument();
    expect(memberRole).toBeInTheDocument();
});

describe('ImageSection component', () => {
    it('renders the image with the correct src and alt text', () => {
        const src = 'https://picsum.photos/1920/1080';
        const alt = 'Meet Our Team';
        const { getByAltText } = render(<ImageSection src={src} alt={alt} />);
        const imageElement = getByAltText(alt);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', src);
    });
});





