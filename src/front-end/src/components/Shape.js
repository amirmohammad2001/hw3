import React from 'react';
import ShapePreview from './ShapePreview';

export default function Shape({ id, type, x, y, onDragStart, onDoubleClick }) {
    const style = {
        position: 'absolute',
        left: x,
        top: y,
        cursor: 'move',
        transform: 'translate(-50%, -50%)'
    };
    return (
        <div
            style={style}
            draggable
            onDragStart={e => onDragStart(e, { type, id })}
            onDoubleClick={onDoubleClick}
        >
            <ShapePreview type={type} size={50} />
        </div>
    );
}
