// src/components/Header.js
import React from 'react';

export default function Header({
                                   name,
                                   onNameChange,

                                   // NEW props
                                   username,
                                   onUsernameChange,
                                   onSave,
                                   onRestore,

                                   onExport,
                                   onImportClick,
                                   fileInputRef,
                                   onFileChange
                               }) {
    return (
        <header className="Header">
            <div className="Header-left">
                <label>
                    Canvas Name:
                    <input
                        className="DrawingName"
                        value={name}
                        onChange={e => onNameChange(e.target.value)}
                    />
                </label>

                {/* NEW username input */}
                <label>
                    Username:
                    <input
                        className="Username"
                        value={username}
                        onChange={e => onUsernameChange(e.target.value)}
                    />
                </label>
            </div>

            <div className="Header-buttons">
                {/* NEW Save/Restore */}
                <button onClick={onSave}>Save</button>
                <button onClick={onRestore}>Restore</button>

                {/* existing Export/Import */}
                <button onClick={onExport}>Export</button>
                <button onClick={onImportClick}>Import</button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={onFileChange}
                />
            </div>
        </header>
    );
}
