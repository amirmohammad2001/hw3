import React from 'react';

export default function ShapePreview({ type, size }) {
    // this is the common bounding-box for all shapes
    const common = {
        width: size,
        height: size,
        display: 'inline-block',
    };

    switch (type) {
        case 'circle':
            return (
                <div
                    style={{
                        ...common,
                        borderRadius: '50%',
                        background: '#555'
                    }}
                />
            );

        case 'square':
            return (
                <div
                    style={{
                        ...common,
                        background: '#333'
                    }}
                />
            );

        case 'triangle':
            return (
                // wrapper is exactly size×size
                <div
                    style={{
                        ...common,
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft:  `${size /2}px solid transparent`,
                            borderRight: `${size /2}px solid transparent`,
                            borderBottom: `${size}px solid #111`,
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            transform: 'translateX(-50%)'
                        }}
                    />
                </div>
            );

        default:
            return null;
    }
}
