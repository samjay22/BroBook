import React from 'react';

export default function FooterLinks() {
    return (
        <div>
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
                <li>
                    <a href="/" className="text-muted">Home</a>
                </li>
                <li>
                    <a href="/src/Presentation/About" className="text-muted">About Us</a>
                </li>
                <li>
                    <a href="/src/Presentation/Events" className="text-muted">Events</a>
                </li>
                <li>
                    <a href="/src/Presentation/Contact" className="text-muted">Contact</a>
                </li>
            </ul>
        </div>
    );
}
