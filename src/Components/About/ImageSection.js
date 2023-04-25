import React from 'react'
import { Image } from 'react-bootstrap';

export default function ImageSection({ src, alt }) {
    return (
        <div className="d-flex justify-content-center mb-3">
            <Image src={src} alt={alt} fluid />
        </div>
    );
}
