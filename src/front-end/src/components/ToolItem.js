import React from 'react';
import ShapePreview from './ShapePreview';

export default function ToolItem({ type, selected, onSelect, onDragStart }) {
    return (
        <div
            className={`Tool ${selected ? 'selected' : ''}`}
            onClick={onSelect}
            draggable
            onDragStart={e => onDragStart(e, { type })}
        >
            <ShapePreview type={type} size={40} />
        </div>
    );
}
