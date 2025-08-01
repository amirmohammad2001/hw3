import React from 'react';
import ShapePreview from './ShapePreview';

export default function BottomBar({ counts }) {
    return (
        <footer className="BottomBar">
            <div className="Count">
                <ShapePreview type="circle" size={20} /> {counts.circle}
            </div>
            <div className="Count">
                <ShapePreview type="square" size={20} /> {counts.square}
            </div>
            <div className="Count">
                <ShapePreview type="triangle" size={20} /> {counts.triangle}
            </div>
        </footer>
    );
}
