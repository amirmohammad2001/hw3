import React from 'react';
import Shape from './Shape';

export default function Canvas({
                                   canvasRef,
                                   shapes,
                                   onCanvasClick,
                                   onDragOver,
                                   onDrop,
                                   onDragStart,
                                   onShapeDoubleClick
                               }) {
    return (
        <div
            className="Canvas"
            ref={canvasRef}
            onClick={onCanvasClick}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            {shapes.map(shape => (
                <Shape
                    key={shape.id}
                    {...shape}
                    onDragStart={onDragStart}
                    onDoubleClick={() => onShapeDoubleClick(shape.id)}
                />
            ))}
        </div>
    );
}
