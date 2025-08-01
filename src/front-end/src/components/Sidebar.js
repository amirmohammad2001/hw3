import React from 'react';
import ToolItem from './ToolItem';

const TYPES = ['circle','square','triangle'];

export default function Sidebar({ selectedType, onSelectType, onDragStart }) {
    return (
        <aside className="Sidebar">
            {TYPES.map(type => (
                <ToolItem
                    key={type}
                    type={type}
                    selected={selectedType === type}
                    onSelect={() => onSelectType(t => (t === type ? null : type))}
                    onDragStart={onDragStart}
                />
            ))}
        </aside>
    );
}
