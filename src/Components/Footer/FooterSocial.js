import React from 'react';

export default function FooterSocial() {
    return (
        <div>
            <h5 className="text-uppercase">Connect with Us</h5>
            <ul className="list-unstyled mb-0">
                <li>
                    <a href="#" className="text-muted"><i className="fab fa-facebook-f me-3"></i>Facebook</a>
                </li>
                <li>
                    <a href="#" className="text-muted"><i className="fab fa-twitter me-3"></i>Twitter</a>
                </li>
                <li>
                    <a href="#" className="text-muted"><i className="fab fa-linkedin me-3"></i>LinkedIn</a>
                </li>
                <li>
                    <a href="#" className="text-muted"><i className="fab fa-instagram me-3"></i>Instagram</a>
                </li>
            </ul>
        </div>
    );
}
