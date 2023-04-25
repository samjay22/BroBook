import React from 'react';

export default function FooterLogo() {
    return (
        <div>
            <h5 className="text-uppercase mb-3">County Line Christian Fellowship Church</h5>
            <p className="text-muted">
                Welcome to our church community, where faith and family are at the heart of everything we do. We believe in the power of worship, compassion, and community service to strengthen our bonds with each other and with our Creator.
            </p>
            <p className="text-muted">
                Established in 1975, we are proud to be a cornerstone of the Jackson community. Our services are open to all, and we welcome you to join us in celebration, prayer, and fellowship.
            </p>
            <p className="text-muted">
                © {new Date().getFullYear()} County Line Christian Fellowship Church. All rights reserved.
            </p>
            <p className="text-muted">
                Website designed and developed by Samuel Taylor.
            </p>
        </div>
    );
}
